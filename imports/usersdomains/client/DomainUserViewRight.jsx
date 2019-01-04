import { Component } from "react"
import PropTypes from "prop-types"
import RightPanel from "/imports/vx/client/RightPanel.jsx"
import RightHeader from "/imports/vx/client/RightHeader.jsx"
import VXForm from "/imports/vx/client/VXForm.jsx"
import VXFieldBox from "/imports/vx/client/VXFieldBox.jsx"
import EntityListHeader from "/imports/vx/client/EntityListHeader.jsx"
import UserEntityList from "/imports/vx/client/UserEntityList.jsx"
import RetireModal from "/imports/vx/client/RetireModal.jsx"
import { setPublishAuthoringDomain } from "/imports/vx/client/code/actions"

export default class UserDomainViewRight extends Component {

    static propTypes = {
        id : PropTypes.string.isRequired,
        domain : PropTypes.object.isRequired,
        users : PropTypes.array.isRequired,
        decorationIconClassName : PropTypes.string,
        decorationColor : PropTypes.oneOf(["blue"]),
        decorationTooltip : PropTypes.string,
        userRolesChecked : PropTypes.object,
        currentDomainId : PropTypes.string
    }

    static defaultProps = {
        id : "domain-user-view-right"
    }

    constructor(props) {
        super(props)
        this.locked = false
    }

    shouldComponentUpdate() {
        return !this.locked
    }

    setLocked(locked) {
        this.locked = locked
    }

    componentDidMount() {
        UX.registerIosButtonDelegate("ios-button-edit", this.handleEdit.bind(this))
        UX.registerIosButtonDelegate("ios-button-clone", this.handleClone.bind(this))
        UX.registerIosButtonDelegate("ios-button-delete", this.handleDelete.bind(this))
    }

    render() {
        return (
            <div id={this.props.id}
                className="flexi-grow">
                <RightPanel>
                    <RightHeader iconUrl={Util.fetchDomainIconUrl(this.props.domain._id)}
                        name={this.props.domain.name}
                        description={this.props.domain.description}
                        decorationIconClassName={this.props.decorationIconClassName}
                        decorationColor={this.props.decorationColor}
                        decorationTooltip={this.props.decorationTooltip}>
                        <VXForm id="domain-user-view-right-form"
                            ref={(form) => { this.form = form }}
                            className="right-panel-form flexi-fixed">
                            <div className="row">
                                <div className="col-xs-12">
                                    <VXFieldBox label={Util.i18n("common.label_billing_address")}
                                        value={this.props.domain.billingAddress1}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <VXFieldBox label={Util.i18n("common.label_billing_city")}
                                        value={this.props.domain.billingCity}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6">
                                    <VXFieldBox label={Util.i18n("common.label_billing_state")}
                                        value={this.formatBillingState()}/>
                                </div>
                                <div className="col-xs-6">
                                    <VXFieldBox label={Util.i18n("common.label_billing_zip")}
                                        value={this.props.domain.billingZip}/>
                                </div>
                            </div>
                        </VXForm>
                    </RightHeader>
                    <EntityListHeader label={Util.i18n("my_domains.label_users_header")}/>
                    <UserEntityList id="domain-user-view-right-list"
                        users={this.props.users}
                        rightPanel={true}
                        roleCheckboxes={true}
                        roleCheckboxesDisabled={true}
                        userRolesChecked={this.props.userRolesChecked}/>
                </RightPanel>
            </div>
        )
    }

    formatBillingState() {
        return this.props.domain.billingState ? Util.i18n("codes.state." + this.props.domain.billingState) : null
    }

    handleEdit(callback) {
        OLog.debug("DomainUserViewRight.jsx handleEdit")
        callback()
        UX.iosMajorPush(null, null, "/domain/" + this.props.domain._id, "RIGHT", "crossfade")
    }

    handleClone(callback) {
        OLog.debug("DomainUserViewRight.jsx handleClone")
        callback()
        let domain = EJSON.parse(EJSON.stringify(this.props.domain))
        delete domain._id
        delete domain.base
        delete domain.iconUrl
        Domains.insert(domain, (error, newDomainId) => {
            if (error) {
                OLog.error("DomainUserViewRight.jsx handleClone error attempting to clone domain=" + error)
                UX.notifyForDatabaseError(error);
                return
            }
            UX.iosMajorPush(null, null, "/domain/" + newDomainId, "RIGHT", "crossfade")
        })
    }

    handleDelete(callback) {
        OLog.debug("DomainUserViewRight.jsx handleDelete")
        callback()
        UX.showModal(<RetireModal title={Util.i18n("common.label_retire_domain")}
            collection={Domains}
            _id={this.props.domain._id}
            retireMethod="retireDomain"
            publishSetAction={setPublishAuthoringDomain}/>)
    }
}
