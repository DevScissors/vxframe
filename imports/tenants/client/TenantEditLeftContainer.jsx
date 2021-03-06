import { withTracker } from "meteor/react-meteor-data"
import TenantEditLeft from "/imports/tenants/client/TenantEditLeft"

export default withTracker(( ) => {

    let tenants

    tenants = VXApp.findTenantList(Meteor.userId())

    return {
        tenants
    }

})(TenantEditLeft)
