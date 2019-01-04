import { Component } from "react"
import PropTypes from "prop-types"
import RadioButtonGroup from "/imports/vx/client/RadioButtonGroup.jsx"
import RadioButton from "/imports/vx/client/RadioButton.jsx"
import TemplateEntityList from "/imports/vx/client/TemplateEntityList.jsx"

export default class TemplateEditLeft extends Component {

    static PropTypes = {
        templates : PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="left-list-container flexi-grow">
                <RadioButtonGroup id="button-group-templates"
                    activeButtonId="button-templates">
                    <RadioButton id="button-templates"
                        text={Util.i18n("common.label_templates")}/>
                </RadioButtonGroup>
                <TemplateEntityList id="template-edit-left-list"
                    templates={this.props.templates}
                    selectable={false}
                    chevrons={false}/>
            </div>
        )
    }
}
