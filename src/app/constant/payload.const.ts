export const Payload = {

    getSubscriptionList: {
        device_type: "Web"
    },

    otpVerification: {
        email: '',
        otp: '',
        device_type: 'Web'
    },

    resendOTP: {
        email: '',
        device_type: 'Web'
    },

    employeeList: {
        search_text: '',
        page_number: '1',
        user_type: '',
        page_size: '10',
        device_type: 'Web'
    },

    projectlist: {
        search_text: '',
        page_number: '1',
        page_size: '10',
    },


   projectmanagelist: {
        search_text: '',
        page_number: '1',
        page_size: '10',
    },

    allemployeeList: {
        search_text: '',
        page_number: '1',
        user_type: '',
        employee_type: '',
        page_size: '10',
        device_type: 'Web'
    },

    addTeaminProject: {
        project_id : '',
        employee_id : ''

    }
}