import { Component } from "react"
import { Provider } from "react-redux"

import PropTypes from "prop-types"
import TransitionGroup from "react-transition-group/TransitionGroup"
import OffCanvasNavContainer from "/imports/layout/client/OffCanvasNavContainer"
import TopBar from "/imports/layout/client/TopBar"
import NotAuthorizedPage from "/imports/notfound/client/NotAuthorizedPage"
import SlidePanel from "/imports/vx/client/SlidePanel"
import VXAnchor from "/imports/vx/client/VXAnchor"

export default class LayoutStandard extends Component {

    static propTypes = {
        id : PropTypes.string.isRequired,
        isAuthorizedRoute : PropTypes.bool.isRequired,
        routePath : PropTypes.string.isRequired,
        content : PropTypes.element.isRequired
    }

    static defaultProps = {
        id : "vx-layout-standard"
    }

    constructor(props) {
        super(props)
        this.date = new Date()
        this.animation = null
    }

    render() {
        if (!this.props.isAuthorizedRoute) {
            return (
                <Provider store={Store}>
                    <div className="flexi-grow">
                        <OffCanvasNavContainer/>
                        <TopBar/>
                        <div className="flexi-grow nav-canvas">
                            <NotAuthorizedPage/>
                        </div>
                    </div>
                </Provider>
            )
        }
        return (
            <Provider store={Store}>
                <div id={this.props.id}
                    className="flexi-grow">
                    <OffCanvasNavContainer/>
                    <TopBar/>
                    <div className="container container-width-100 nav-canvas flexi-grow">
                        <div className="animation-top flexi-grow">
                            <div className="animation-container notification-container flexi-grow">
                                <TransitionGroup id="layout-transition-group" component="div" className="flexi-grow">
                                    <SlidePanel key={this.props.routePath}
                                        id={this.props.routePath}
                                        className="animation-panel flexi-grow"
                                        getAnimation={this.getAnimation.bind(this)}>
                                        {this.props.content}
                                    </SlidePanel>
                                </TransitionGroup>
                            </div>
                        </div>
                    </div>
                    <VXAnchor/>
                </div>
            </Provider>
        )
    }

    getAnimation() {
        return this.animation
    }

    setAnimation(animation) {
        this.animation = animation
    }
}
