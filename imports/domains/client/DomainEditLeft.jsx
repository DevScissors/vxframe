import { Component } from "react"
import PropTypes from "prop-types"
import RadioButtonGroup from "/imports/vx/client/RadioButtonGroup"
import RadioButton from "/imports/vx/client/RadioButton"
import UserEntityList from "/imports/vx/client/UserEntityList"

export default class DomainEditLeft extends Component {

    static propTypes = {
        users : PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="left-list-container flexi-grow">
                <RadioButtonGroup id="button-group-users"
                    activeButtonId="button-users">
                    <RadioButton id="button-users"
                        text={Util.i18n("common.label_domains")}/>
                </RadioButtonGroup>
                <UserEntityList id="domain-edit-left-list"
                    users={this.props.users}
                    draggable={true}
                    dragClassName="user-drag-list"
                    dropClassName="user-drop-list"
                    chevrons={false}/>
            </div>
        )
    }
}
