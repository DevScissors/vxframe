import { Component } from "react"
import PropTypes from "prop-types"
import SlidePairContainer from "/imports/vx/client/SlidePairContainer"
import LoadingSpinner from "/imports/vx/client/LoadingSpinner"
import TemplateEditLeftContainer from "/imports/templates/client/TemplateEditLeftContainer"
import TemplateEditRightContainer from "/imports/templates/client/TemplateEditRightContainer"

export default class TemplateEdit extends Component {

    static propTypes = {
        ready : PropTypes.bool.isRequired
    }

    render() {
        if (!this.props.ready) {
            return (<LoadingSpinner/>)
        }
        return (
            <SlidePairContainer leftPanel={(<TemplateEditLeftContainer/>)}
                rightPanel={(<TemplateEditRightContainer/>)}
                leftColumnCount={5}
                rightColumnCount={7}/>
        )
    }
}
