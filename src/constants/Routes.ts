export enum Routes {
    MainPage = "/main",
    Courses = "/courses",
    Faq = "/faq",
    About = "/about",
    Conditions = "/conditions",

    // Auth and Login
    AuthPage = "/auth",
    LoginPage = "/auth/login",
    SignUp1 = "/auth/sign-up",
    SignUp2 = "/auth/sign-up-verify",
    SignUp3 = "/auth/sign-up-full-register",
    ForgotPassword1 = "/auth/forgot-password-phone",
    ForgotPassword2 = "/auth/forgot-password-code-verify",
    ForgotPassword3 = "/auth/forgot-password-new-password",

    //User Profile
    UserProfile = "/user-profile/",
    UserProfileCourses = "/user-profile/courses",
    UserProfileBalance = "/user-profile/balance",
    UserProfileProfile = "/user-profile/profile",
    UserProfileId = "/user-profile/id",
    CoursesById = "/coursesDetails/:id",

    //Payment
    Payment = "/payment/:id",

    //Search
    Search = "/search/:id"
}