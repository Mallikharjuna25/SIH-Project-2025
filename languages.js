// Multilingual support for SIH Project
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        reportIssue: "Report Issue",
        viewIssues: "View Issues",
        contact: "Contact",
        adminLogin: "Admin Login",
        
        // Hero Section
        heroTitle: "Report Issues. Get Them Resolved. Build a Cleaner, Greener City Together.",
        heroDescription: "A smart platform that connects citizens and authorities to resolve civic problems like potholes, garbage, drainage, and streetlights with real-time updates and full transparency.",
        reportNow: "Report an Issue Now",
        viewReported: "View Reported Issues",
        trackStatus: "Track Status",
        
        // Stats
        totalReports: "Total Reports",
        resolved: "Resolved",
        inProgress: "In Progress",
        pending: "Pending",
        
        // Common
        submit: "Submit",
        cancel: "Cancel",
        loading: "Loading...",
        success: "Success",
        error: "Error",
        
        // Form Labels
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        location: "Location",
        description: "Description",
        title: "Title",
        required: "Required",
        
        // Report Issue Page
        reportAnIssue: "Report an Issue",
        helpMakeCity: "Help us make your city cleaner and better by reporting civic problems",
        issueDetails: "Issue Details",
        issueTitle: "Issue Title",
        enterShortTitle: "Enter a short title (e.g., Garbage not collected)",
        describeIssue: "Describe the issue in detail...",
        enterLocation: "Enter location/address",
        getCurrentLocation: "Get current location",
        uploadPhoto: "Upload Photo",
        choosePhoto: "Choose Photo (JPG, PNG - Max 2MB)",
        contactDetails: "Contact Details",
        atLeastOneContact: "At least one contact method is required for updates",
        enterFullName: "Enter your full name",
        enterEmail: "Enter your email address",
        enterPhone: "Enter your phone number",
        submitReport: "Submit Report",
        
        // View Issues Page
        yourReportedIssues: "Your Reported Issues",
        trackStatusIssues: "Track the status of issues you have reported to your local authority",
        searchIssues: "Search by Issue ID, Title, or keywords...",
        allStatuses: "All Statuses",
        allLocations: "All Locations",
        allTime: "All Time",
        today: "Today",
        lastWeek: "Last Week",
        lastMonth: "Last Month",
        newestFirst: "Newest First",
        oldestFirst: "Oldest First",
        byStatus: "By Status",
        yourIssues: "Your Issues",
        total: "Total",
        noIssuesFound: "No Issues Found",
        noIssuesMatch: "No issues match your current search and filter criteria.",
        reportNewIssue: "Report New Issue",
        
        // Admin Pages
        adminDashboard: "Admin Dashboard",
        administrator: "Administrator",
        logout: "Logout",
        totalIssues: "Total Issues",
        recentIssues: "Recent Issues",
        refresh: "Refresh",
        reporter: "Reporter",
        date: "Date",
        status: "Status",
        actions: "Actions",
        
        // About Page
        aboutUs: "About Us",
        ourMission: "Our Mission",
        ourVision: "Our Vision",
        ourValues: "Our Values",
        ourImpact: "Our Impact",
        issuesResolved: "Issues Resolved",
        activeCitizens: "Active Citizens",
        satisfactionRate: "Satisfaction Rate",
        
        // Contact Page
        contactUs: "Contact Us",
        getInTouch: "Get in touch with us for support, questions, or feedback",
        sendMessage: "Send us a Message",
        fillForm: "Fill out the form below and we'll get back to you as soon as possible",
        subject: "Subject",
        selectSubject: "Select a subject",
        generalInquiry: "General Inquiry",
        technicalSupport: "Technical Support",
        feedback: "Feedback",
        complaint: "Complaint",
        partnership: "Partnership",
        other: "Other",
        message: "Message",
        tellUsHelp: "Tell us how we can help you...",
        sendMessageBtn: "Send Message",
        
        // Common UI
        learnMore: "Learn More",
        viewDetails: "View Details",
        close: "Close",
        back: "Back",
        next: "Next",
        previous: "Previous",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        update: "Update",
        confirm: "Confirm",
        yes: "Yes",
        no: "No",
        ok: "OK",
        
        // Trust indicators
        systemAvailable: "System Available",
        securePrivate: "Secure & Private",
        statusUpdates: "Status Updates",
        realtime: "Real-time",
        
        // Language
        language: "Language",
        
        // Statistics Section
        live: "Live",
        statistics: "Statistics",
        statisticsDescription: "Real-time data showing the impact of our civic reporting system in building a better community.",
        totalIssuesReported: "Total Issues Reported",
        growingCommunity: "Growing community participation",
        issuesResolvedStat: "Issues Resolved",
        successfullyCompleted: "Successfully completed",
        issuesInProgressStat: "Issues In Progress",
        currentlyBeingAddressed: "Currently being addressed",
        pendingIssuesStat: "Pending Issues",
        awaitingAssignment: "Awaiting assignment",
        resolutionRate: "Resolution Rate",
        resolutionRateDesc: "Of reported issues successfully resolved by our system",
        
        // Why This Matters Section
        whyThis: "Why This",
        matters: "Matters",
        qualityOfLife: "Quality of Life",
        qualityOfLifeDesc: "Cleaner streets, better infrastructure, and safer neighborhoods improve daily life for everyone.",
        goodGovernance: "Good Governance",
        goodGovernanceDesc: "Transparent communication between citizens and authorities builds trust and accountability.",
        environmentalImpact: "Environmental Impact",
        environmentalImpactDesc: "Quick resolution of environmental issues contributes to a sustainable, green future.",
        communityUnity: "Community Unity",
        communityUnityDesc: "Citizens working together with authorities creates a stronger, more connected community.",
        
        // CTA Section
        readyToMake: "Ready to Make Your City",
        better: "Better?",
        ctaDescription: "Take the first step towards building a cleaner, greener, and more responsive community. Your voice matters, and your reports create real change.",
        
        // Section Headers
        aboutOur: "About Our",
        mission: "Mission",
        aboutDescription: "Our Civic Issue Reporting & Resolution System is designed under the theme of Clean & Green Technology. It allows citizens to actively participate in making their city better by reporting problems online. Municipal authorities can then review, act, and resolve them efficiently, ensuring accountability and trust.",
        howIt: "How It",
        works: "Works",
        howItWorksDescription: "Our streamlined process ensures your civic issues are handled efficiently from report to resolution.",
        powerful: "Powerful",
        features: "Features",
        featuresDescription: "Everything you need to report, track, and resolve civic issues efficiently and transparently.",
        
        // Value Cards
        cleanGreen: "Clean & Green",
        cleanGreenDesc: "Promoting environmental sustainability through technology-driven civic solutions.",
        trustTransparency: "Trust & Transparency",
        trustTransparencyDesc: "Building accountability between citizens and authorities with full transparency.",
        communityDriven: "Community Driven",
        communityDrivenDesc: "Empowering citizens to actively participate in making their city better.",
        efficientResolution: "Efficient Resolution",
        efficientResolutionDesc: "Streamlined processes ensure issues are resolved quickly and effectively.",
        
        // Step Cards
        reportAnIssueStep: "Report an Issue",
        reportAnIssueStepDesc: "Submit details with description, photo, and location through our simple form.",
        storedInSystem: "Stored in System",
        storedInSystemDesc: "Issue is recorded in a centralized database for tracking and management.",
        authoritiesTakeAction: "Authorities Take Action",
        authoritiesTakeActionDesc: "Concerned department is automatically notified and assigned the issue.",
        trackResolve: "Track & Resolve",
        trackResolveDesc: "Citizen receives real-time updates until the issue is completely resolved.",
        
        // Feature Cards
        simpleReportingForm: "Simple Reporting Form",
        simpleReportingFormDesc: "Quick and intuitive form to report any civic issue in just a few clicks.",
        locationPhotoSubmissions: "Location & Photo Submissions",
        locationPhotoSubmissionsDesc: "Add precise location and photos for accurate issue identification and tracking.",
        realTimeStatusTracking: "Real-Time Status Tracking",
        realTimeStatusTrackingDesc: "Monitor your report status from pending to resolved with live updates.",
        adminDashboardFeature: "Admin Dashboard",
        adminDashboardFeatureDesc: "Comprehensive dashboard for authorities to manage and resolve issues efficiently.",
        smartNotifications: "Smart Notifications",
        smartNotificationsDesc: "Get instant notifications when your reported issue status changes.",
        beforeAfterProof: "Before & After Proof",
        beforeAfterProofDesc: "Visual documentation showing the issue resolution with transparency.",
        quickResponseTime: "Quick Response Time",
        quickResponseTimeDesc: "Automated routing ensures issues reach the right department immediately.",
        secureReliable: "Secure & Reliable",
        secureReliableDesc: "Your data is protected with enterprise-grade security and privacy measures.",
        
        // Footer
        footerDescription: "Building cleaner, greener cities through transparent civic issue reporting and resolution. Together, we make our communities better.",
        quickLinks: "Quick Links",
        resources: "Resources",
        contactInfo: "Contact Information",
        copyright: "© 2025 Civic Issue Reporting System. All rights reserved.",
        tagline: "Built with ❤️ for cleaner, greener cities"
    },
    
    hi: {
        // Navigation
        home: "होम",
        about: "हमारे बारे में",
        reportIssue: "समस्या रिपोर्ट करें",
        viewIssues: "समस्याएं देखें",
        contact: "संपर्क",
        adminLogin: "एडमिन लॉगिन",
        
        // Hero Section
        heroTitle: "समस्याओं की रिपोर्ट करें। उन्हें हल कराएं। मिलकर एक स्वच्छ, हरित शहर बनाएं।",
        heroDescription: "एक स्मार्ट प्लेटफॉर्म जो नागरिकों और अधिकारियों को जोड़कर गड्ढे, कचरा, जल निकासी और स्ट्रीट लाइट जैसी नागरिक समस्याओं को वास्तविक समय अपडेट और पूर्ण पारदर्शिता के साथ हल करता है।",
        reportNow: "अभी समस्या रिपोर्ट करें",
        viewReported: "रिपोर्ट की गई समस्याएं देखें",
        trackStatus: "स्थिति ट्रैक करें",
        
        // Stats
        totalReports: "कुल रिपोर्ट",
        resolved: "हल हो गई",
        inProgress: "प्रगति में",
        pending: "लंबित",
        
        // Common
        submit: "जमा करें",
        cancel: "रद्द करें",
        loading: "लोड हो रहा है...",
        success: "सफलता",
        error: "त्रुटि",
        
        // Form Labels
        name: "पूरा नाम",
        email: "ईमेल पता",
        phone: "फोन नंबर",
        location: "स्थान",
        description: "विवरण",
        title: "शीर्षक",
        required: "आवश्यक",
        
        // Report Issue Page
        reportAnIssue: "समस्या रिपोर्ट करें",
        helpMakeCity: "नागरिक समस्याओं की रिपोर्ट करके अपने शहर को स्वच्छ और बेहतर बनाने में हमारी मदद करें",
        issueDetails: "समस्या विवरण",
        issueTitle: "समस्या शीर्षक",
        enterShortTitle: "एक छोटा शीर्षक दर्ज करें (जैसे, कचरा एकत्र नहीं किया गया)",
        describeIssue: "समस्या का विस्तार से वर्णन करें...",
        enterLocation: "स्थान/पता दर्ज करें",
        getCurrentLocation: "वर्तमान स्थान प्राप्त करें",
        uploadPhoto: "फोटो अपलोड करें",
        choosePhoto: "फोटो चुनें (JPG, PNG - अधिकतम 2MB)",
        contactDetails: "संपर्क विवरण",
        atLeastOneContact: "अपडेट के लिए कम से कम एक संपर्क विधि आवश्यक है",
        enterFullName: "अपना पूरा नाम दर्ज करें",
        enterEmail: "अपना ईमेल पता दर्ज करें",
        enterPhone: "अपना फोन नंबर दर्ज करें",
        submitReport: "रिपोर्ट जमा करें",
        
        // View Issues Page
        yourReportedIssues: "आपकी रिपोर्ट की गई समस्याएं",
        trackStatusIssues: "अपने स्थानीय प्राधिकरण को रिपोर्ट की गई समस्याओं की स्थिति को ट्रैक करें",
        searchIssues: "समस्या ID, शीर्षक, या कीवर्ड द्वारा खोजें...",
        allStatuses: "सभी स्थितियां",
        allLocations: "सभी स्थान",
        allTime: "सभी समय",
        today: "आज",
        lastWeek: "पिछला सप्ताह",
        lastMonth: "पिछला महीना",
        newestFirst: "नवीनतम पहले",
        oldestFirst: "पुराना पहले",
        byStatus: "स्थिति के अनुसार",
        yourIssues: "आपकी समस्याएं",
        total: "कुल",
        noIssuesFound: "कोई समस्या नहीं मिली",
        noIssuesMatch: "आपके वर्तमान खोज और फ़िल्टर मानदंडों से कोई समस्या मेल नहीं खाती।",
        reportNewIssue: "नई समस्या रिपोर्ट करें",
        
        // Admin Pages
        adminDashboard: "एडमिन डैशबोर्ड",
        administrator: "प्रशासक",
        logout: "लॉगआउट",
        totalIssues: "कुल समस्याएं",
        recentIssues: "हाल की समस्याएं",
        refresh: "रीफ्रेश",
        reporter: "रिपोर्टर",
        date: "दिनांक",
        status: "स्थिति",
        actions: "कार्य",
        
        // About Page
        aboutUs: "हमारे बारे में",
        ourMission: "हमारा मिशन",
        ourVision: "हमारी दृष्टि",
        ourValues: "हमारे मूल्य",
        ourImpact: "हमारा प्रभाव",
        issuesResolved: "समस्याएं हल हुईं",
        activeCitizens: "सक्रिय नागरिक",
        satisfactionRate: "संतुष्टि दर",
        
        // Contact Page
        contactUs: "हमसे संपर्क करें",
        getInTouch: "सहायता, प्रश्न या फीडबैक के लिए हमसे संपर्क करें",
        sendMessage: "हमें संदेश भेजें",
        fillForm: "नीचे दिया गया फॉर्म भरें और हम जल्द से जल्द आपसे संपर्क करेंगे",
        subject: "विषय",
        selectSubject: "एक विषय चुनें",
        generalInquiry: "सामान्य पूछताछ",
        technicalSupport: "तकनीकी सहायता",
        feedback: "फीडबैक",
        complaint: "शिकायत",
        partnership: "साझेदारी",
        other: "अन्य",
        message: "संदेश",
        tellUsHelp: "हमें बताएं कि हम आपकी कैसे मदद कर सकते हैं...",
        sendMessageBtn: "संदेश भेजें",
        
        // Common UI
        learnMore: "और जानें",
        viewDetails: "विवरण देखें",
        close: "बंद करें",
        back: "वापस",
        next: "अगला",
        previous: "पिछला",
        save: "सेव करें",
        delete: "हटाएं",
        edit: "संपादित करें",
        update: "अपडेट करें",
        confirm: "पुष्टि करें",
        yes: "हां",
        no: "नहीं",
        ok: "ठीक है",
        
        // Trust indicators
        systemAvailable: "सिस्टम उपलब्ध",
        securePrivate: "सुरक्षित और निजी",
        statusUpdates: "स्थिति अपडेट",
        realtime: "वास्तविक समय",
        
        // Language
        language: "भाषा",
        
        // Statistics Section
        live: "लाइव",
        statistics: "आंकड़े",
        statisticsDescription: "वास्तविक समय का डेटा जो एक बेहतर समुदाय बनाने में हमारे नागरिक रिपोर्टिंग सिस्टम के प्रभाव को दिखाता है।",
        totalIssuesReported: "कुल रिपोर्ट की गई समस्याएं",
        growingCommunity: "बढ़ती समुदायिक भागीदारी",
        issuesResolvedStat: "हल हुई समस्याएं",
        successfullyCompleted: "सफलतापूर्वक पूरा किया गया",
        issuesInProgressStat: "प्रगति में समस्याएं",
        currentlyBeingAddressed: "वर्तमान में संबोधित की जा रही",
        pendingIssuesStat: "लंबित समस्याएं",
        awaitingAssignment: "असाइनमेंट का इंतजार",
        resolutionRate: "समाधान दर",
        resolutionRateDesc: "हमारे सिस्टम द्वारा सफलतापूर्वक हल की गई रिपोर्ट की गई समस्याओं का",
        
        // Why This Matters Section
        whyThis: "यह क्यों",
        matters: "महत्वपूर्ण है",
        qualityOfLife: "जीवन की गुणवत्ता",
        qualityOfLifeDesc: "साफ सड़कें, बेहतर इंफ्रास्ट्रक्चर, और सुरक्षित पड़ोस सभी के लिए दैनिक जीवन में सुधार लाते हैं।",
        goodGovernance: "अच्छा शासन",
        goodGovernanceDesc: "नागरिकों और अधिकारियों के बीच पारदर्शी संचार विश्वास और जवाबदेही बनाता है।",
        environmentalImpact: "पर्यावरणीय प्रभाव",
        environmentalImpactDesc: "पर्यावरणीय समस्याओं का त्वरित समाधान एक स्थायी, हरित भविष्य में योगदान देता है।",
        communityUnity: "समुदायिक एकता",
        communityUnityDesc: "अधिकारियों के साथ मिलकर काम करने वाले नागरिक एक मजबूत, अधिक जुड़ा हुआ समुदाय बनाते हैं।",
        
        // CTA Section
        readyToMake: "अपने शहर को बनाने के लिए तैयार",
        better: "बेहतर?",
        ctaDescription: "एक साफ, हरित, और अधिक जवाबदेह समुदाय बनाने की दिशा में पहला कदम उठाएं। आपकी आवाज़ मायने रखती है, और आपकी रिपोर्ट्स वास्तविक बदलाव लाती हैं।",
        
        // Section Headers
        aboutOur: "हमारे बारे में",
        mission: "मिशन",
        aboutDescription: "हमारा नागरिक समस्या रिपोर्टिंग और समाधान सिस्टम स्वच्छ और हरित प्रौद्योगिकी के विषय के तहत डिज़ाइन किया गया है। यह नागरिकों को ऑनलाइन समस्याओं की रिपोर्ट करके अपने शहर को बेहतर बनाने में सक्रिय रूप से भाग लेने की अनुमति देता है। नगरपालिका अधिकारी फिर उनकी समीक्षा, कार्य और कुशलता से समाधान कर सकते हैं, जवाबदेही और विश्वास सुनिश्चित करते हैं।",
        howIt: "यह कैसे",
        works: "काम करता है",
        howItWorksDescription: "हमारी सुव्यवस्थित प्रक्रिया सुनिश्चित करती है कि आपकी नागरिक समस्याओं को रिपोर्ट से समाधान तक कुशलता से संभाला जाए।",
        powerful: "शक्तिशाली",
        features: "सुविधाएं",
        featuresDescription: "नागरिक समस्याओं को कुशलता से और पारदर्शिता के साथ रिपोर्ट करने, ट्रैक करने और हल करने के लिए आपको जो कुछ भी चाहिए।",
        
        // Value Cards
        cleanGreen: "स्वच्छ और हरित",
        cleanGreenDesc: "प्रौद्योगिकी-संचालित नागरिक समाधानों के माध्यम से पर्यावरणीय स्थिरता को बढ़ावा देना।",
        trustTransparency: "विश्वास और पारदर्शिता",
        trustTransparencyDesc: "पूर्ण पारदर्शिता के साथ नागरिकों और अधिकारियों के बीच जवाबदेही का निर्माण।",
        communityDriven: "समुदाय संचालित",
        communityDrivenDesc: "नागरिकों को अपने शहर को बेहतर बनाने में सक्रिय रूप से भाग लेने के लिए सशक्त बनाना।",
        efficientResolution: "कुशल समाधान",
        efficientResolutionDesc: "सुव्यवस्थित प्रक्रियाएं सुनिश्चित करती हैं कि समस्याओं का तुरंत और प्रभावी रूप से समाधान हो।",
        
        // Step Cards
        reportAnIssueStep: "समस्या रिपोर्ट करें",
        reportAnIssueStepDesc: "हमारे सरल फॉर्म के माध्यम से विवरण, फोटो और स्थान के साथ विवरण जमा करें।",
        storedInSystem: "सिस्टम में संग्रहीत",
        storedInSystemDesc: "ट्रैकिंग और प्रबंधन के लिए समस्या को केंद्रीकृत डेटाबेस में दर्ज किया जाता है।",
        authoritiesTakeAction: "अधिकारी कार्रवाई करते हैं",
        authoritiesTakeActionDesc: "संबंधित विभाग को स्वचालित रूप से सूचित किया जाता है और समस्या सौंपी जाती है।",
        trackResolve: "ट्रैक और समाधान",
        trackResolveDesc: "नागरिक को समस्या पूरी तरह से हल होने तक वास्तविक समय अपडेट प्राप्त होते हैं।",
        
        // Feature Cards
        simpleReportingForm: "सरल रिपोर्टिंग फॉर्म",
        simpleReportingFormDesc: "कुछ ही क्लिक में किसी भी नागरिक समस्या की रिपोर्ट करने के लिए त्वरित और सहज फॉर्म।",
        locationPhotoSubmissions: "स्थान और फोटो सबमिशन",
        locationPhotoSubmissionsDesc: "सटीक समस्या पहचान और ट्रैकिंग के लिए सटीक स्थान और फोटो जोड़ें।",
        realTimeStatusTracking: "वास्तविक समय स्थिति ट्रैकिंग",
        realTimeStatusTrackingDesc: "लाइव अपडेट के साथ अपनी रिपोर्ट की स्थिति को लंबित से हल तक मॉनिटर करें।",
        adminDashboardFeature: "एडमिन डैशबोर्ड",
        adminDashboardFeatureDesc: "अधिकारियों के लिए समस्याओं को कुशलता से प्रबंधित और हल करने के लिए व्यापक डैशबोर्ड।",
        smartNotifications: "स्मार्ट सूचनाएं",
        smartNotificationsDesc: "जब आपकी रिपोर्ट की गई समस्या की स्थिति बदलती है तो तुरंत सूचनाएं प्राप्त करें।",
        beforeAfterProof: "पहले और बाद का प्रमाण",
        beforeAfterProofDesc: "पारदर्शिता के साथ समस्या समाधान दिखाने वाला दृश्य दस्तावेजीकरण।",
        quickResponseTime: "त्वरित प्रतिक्रिया समय",
        quickResponseTimeDesc: "स्वचालित रूटिंग सुनिश्चित करती है कि समस्याएं तुरंत सही विभाग तक पहुंचें।",
        secureReliable: "सुरक्षित और विश्वसनीय",
        secureReliableDesc: "आपका डेटा एंटरप्राइज़-ग्रेड सुरक्षा और गोपनीयता उपायों से सुरक्षित है।",
        
        // Footer
        footerDescription: "पारदर्शी नागरिक समस्या रिपोर्टिंग और समाधान के माध्यम से स्वच्छ, हरित शहरों का निर्माण। मिलकर हम अपने समुदायों को बेहतर बनाते हैं।",
        quickLinks: "त्वरित लिंक",
        resources: "संसाधन",
        contactInfo: "संपर्क जानकारी",
        copyright: "© 2025 नागरिक समस्या रिपोर्टिंग सिस्टम। सभी अधिकार सुरक्षित।",
        tagline: "स्वच्छ, हरित शहरों के लिए ❤️ से बनाया गया"
    },
    
    te: {
        // Navigation
        home: "హోమ్",
        about: "మా గురించి",
        reportIssue: "సమస్య నివేదించండి",
        viewIssues: "సమస్యలను చూడండి",
        contact: "సంప్రదించండి",
        adminLogin: "అడ్మిన్ లాగిన్",
        
        // Hero Section
        heroTitle: "సమస్యలను నివేదించండి. వాటిని పరిష్కరించండి. కలిసి స్వచ్ఛమైన, పచ్చని నగరాన్ని నిర్మించండి.",
        heroDescription: "గుంతలు, చెత్త, డ్రైనేజీ మరియు వీధి దీపాలు వంటి పౌర సమస్యలను రియల్ టైమ్ అప్‌డేట్‌లు మరియు పూర్తి పారదర్శకతతో పరిష్కరించడానికి పౌరులు మరియు అధికారులను కలిపే స్మార్ట్ ప్లాట్‌ఫారమ్.",
        reportNow: "ఇప్పుడే సమస్య నివేదించండి",
        viewReported: "నివేదించిన సమస్యలను చూడండి",
        trackStatus: "స్థితిని ట్రాక్ చేయండి",
        
        // Stats
        totalReports: "మొత్తం నివేదికలు",
        resolved: "పరిష్కరించబడింది",
        inProgress: "పురోగతిలో",
        pending: "పెండింగ్",
        
        // Common
        submit: "సమర్పించండి",
        cancel: "రద్దు చేయండి",
        loading: "లోడ్ అవుతోంది...",
        success: "విజయం",
        error: "లోపం",
        
        // Form Labels
        name: "పూర్తి పేరు",
        email: "ఇమెయిల్ చిరునామా",
        phone: "ఫోన్ నంబర్",
        location: "స్థానం",
        description: "వివరణ",
        title: "శీర్షిక",
        required: "అవసరం",
        
        // Report Issue Page
        reportAnIssue: "సమస్య నివేదించండి",
        helpMakeCity: "పౌర సమస్యలను నివేదించడం ద్వారా మీ నగరాన్ని స్వచ్ఛంగా మరియు మెరుగ్గా చేయడంలో మాకు సహాయం చేయండి",
        issueDetails: "సమస్య వివరాలు",
        issueTitle: "సమస్య శీర్షిక",
        enterShortTitle: "చిన్న శీర్షిక నమోదు చేయండి (ఉదా., చెత్త సేకరించలేదు)",
        describeIssue: "సమస్యను వివరంగా వర్ణించండి...",
        enterLocation: "స్థానం/చిరునామా నమోదు చేయండి",
        getCurrentLocation: "ప్రస్తుత స్థానం పొందండి",
        uploadPhoto: "ఫోటో అప్లోడ్ చేయండి",
        choosePhoto: "ఫోటో ఎంచుకోండి (JPG, PNG - గరిష్టం 2MB)",
        contactDetails: "సంప్రదింపు వివరాలు",
        atLeastOneContact: "అప్డేట్ల కోసం కనీసం ఒక సంప్రదింపు పద్ధతి అవసరం",
        enterFullName: "మీ పూర్తి పేరు నమోదు చేయండి",
        enterEmail: "మీ ఇమెయిల్ చిరునామా నమోదు చేయండి",
        enterPhone: "మీ ఫోన్ నంబర్ నమోదు చేయండి",
        submitReport: "నివేదిక సమర్పించండి",
        
        // View Issues Page
        yourReportedIssues: "మీరు నివేదించిన సమస్యలు",
        trackStatusIssues: "మీ స్థానిక అధికారులకు నివేదించిన సమస్యల స్థితిని ట్రాక్ చేయండి",
        searchIssues: "సమస్య ID, శీర్షిక లేదా కీవర్డ్ల ద్వారా వెతకండి...",
        allStatuses: "అన్ని స్థితులు",
        allLocations: "అన్ని స్థానాలు",
        allTime: "అన్ని సమయాలు",
        today: "ఈరోజు",
        lastWeek: "గత వారం",
        lastMonth: "గత నెల",
        newestFirst: "కొత్తవి మొదట",
        oldestFirst: "పాతవి మొదట",
        byStatus: "స్థితి ప్రకారం",
        yourIssues: "మీ సమస్యలు",
        total: "మొత్తం",
        noIssuesFound: "సమస్యలు కనుగొనబడలేదు",
        noIssuesMatch: "మీ ప్రస్తుత శోధన మరియు ఫిల్టర్ ప్రమాణాలకు సమస్యలు సరిపోలలేదు.",
        reportNewIssue: "కొత్త సమస్య నివేదించండి",
        
        // Admin Pages
        adminDashboard: "అడ్మిన్ డ్యాష్బోర్డ్",
        administrator: "నిర్వాహకుడు",
        logout: "లాగ్అవుట్",
        totalIssues: "మొత్తం సమస్యలు",
        recentIssues: "ఇటీవలి సమస్యలు",
        refresh: "రిఫ్రెష్",
        reporter: "రిపోర్టర్",
        date: "తేదీ",
        status: "స్థితి",
        actions: "చర్యలు",
        
        // About Page
        aboutUs: "మా గురించి",
        ourMission: "మా లక్ష్యం",
        ourVision: "మా దృష్టి",
        ourValues: "మా విలువలు",
        ourImpact: "మా ప్రభావం",
        issuesResolved: "పరిష్కరించిన సమస్యలు",
        activeCitizens: "క్రియాశీల పౌరులు",
        satisfactionRate: "సంతృప్తి రేటు",
        
        // Contact Page
        contactUs: "మాను సంప్రదించండి",
        getInTouch: "మద్దతు, ప్రశ్నలు లేదా అభిప్రాయాల కోసం మాతో సంప్రదించండి",
        sendMessage: "మాకు సందేశం పంపండి",
        fillForm: "దిగువ ఫారమ్ను పూరించండి మరియు మేము వీలైనంత త్వరగా మీతో సంప్రదిస్తాము",
        subject: "విషయం",
        selectSubject: "విషయం ఎంచుకోండి",
        generalInquiry: "సాధారణ విచారణ",
        technicalSupport: "సాంకేతిక మద్దతు",
        feedback: "అభిప్రాయం",
        complaint: "ఫిర్యాదు",
        partnership: "భాగస్వామ్యం",
        other: "ఇతర",
        message: "సందేశం",
        tellUsHelp: "మేము మీకు ఎలా సహాయం చేయగలమో మాకు చెప్పండి...",
        sendMessageBtn: "సందేశం పంపండి",
        
        // Common UI
        learnMore: "మరింత తెలుసుకోండి",
        viewDetails: "వివరాలు చూడండి",
        close: "మూసివేయండి",
        back: "వెనుకకు",
        next: "తదుపరి",
        previous: "మునుపటి",
        save: "సేవ్ చేయండి",
        delete: "తొలగించండి",
        edit: "సవరించండి",
        update: "అప్డేట్ చేయండి",
        confirm: "నిర్ధారించండి",
        yes: "అవును",
        no: "లేదు",
        ok: "సరే",
        
        // Trust indicators
        systemAvailable: "సిస్టమ్ అందుబాటులో",
        securePrivate: "సురక్షితం మరియు ప్రైవేట్",
        statusUpdates: "స్థితి అప్డేట్లు",
        realtime: "నిజ సమయం",
        
        // Language
        language: "భాష",
        
        // Statistics Section
        live: "లైవ్",
        statistics: "గణాంకాలు",
        statisticsDescription: "మెరుగైన సమాజాన్ని నిర్మించడంలో మా పౌర రిపోర్టింగ్ సిస్టమ్ ప్రభావాన్ని చూపించే నిజ-సమయ డేటా.",
        totalIssuesReported: "మొత్తం నివేదించిన సమస్యలు",
        growingCommunity: "వర్ధిల్లుతున్న సముదాయ భాగస్వామ్యం",
        issuesResolvedStat: "పరిష్కరించిన సమస్యలు",
        successfullyCompleted: "విజయవంతంగా పూర్తి చేయబడింది",
        issuesInProgressStat: "పురోగతిలో సమస్యలు",
        currentlyBeingAddressed: "ప్రస్తుతం పరిష్కరించబడుతున్నవి",
        pendingIssuesStat: "పెండింగ్ సమస్యలు",
        awaitingAssignment: "అసైన్మెంట్ కోసం వేచి ఉంది",
        resolutionRate: "పరిష్కార రేటు",
        resolutionRateDesc: "మా సిస్టమ్ ద్వారా విజయవంతంగా పరిష్కరించిన నివేదించిన సమస్యలలో",
        
        // Why This Matters Section
        whyThis: "ఇది ఎందుకు",
        matters: "మహత్వపూర్ణం",
        qualityOfLife: "జీవిత గుణమేన",
        qualityOfLifeDesc: "స్వచ్ఛమైన వీధులు, మెరుగైన ఇన్ఫ్రాస్ట్రక్చర్, మరియు సురక్షితమైన ప్రాంతాలు ప్రతివారి దైనందిన జీవితాన్ని మెరుగుపరుస్తాయి.",
        goodGovernance: "మంచి పాలనం",
        goodGovernanceDesc: "పౌరులు మరియు అధికారుల మధ్య పారదర్శక సందేశ వినిమయం నమ్మకం మరియు జవాబుదారీతనాన్ని నిర్మిస్తుంది.",
        environmentalImpact: "పర్యావరణ ప్రభావం",
        environmentalImpactDesc: "పర్యావరణ సమస్యల త్వరిత పరిష్కారం స్థిరమైన, పచ్చని భవిష్యత్తుకు దారితీస్తుంది.",
        communityUnity: "సముదాయ ఏకత",
        communityUnityDesc: "అధికారులతో కలిసి పనిచేసే పౌరులు మరింత బలమైన, ఎక్కువ అనుబంధం ఉన్న సముదాయాన్ని సృష్టిస్తారు.",
        
        // CTA Section
        readyToMake: "మీ నగరాన్ని మెరుగుపరచడానికి తయారుగా",
        better: "ఉన్నారా?",
        ctaDescription: "స్వచ్ఛమైన, పచ్చని, మరియు ఎక్కువ ప్రతిస్పందనత్మక సముదాయాన్ని నిర్మించడం వైపు మొదటిగా అడుగు వేయండి. మీ ఆవాజు మహత్వపూర్ణం, మరియు మీ రిపోర్ట్లు వాస్తవిక మార్పును తెస్తాయి.",
        
        // Section Headers
        aboutOur: "మా గురించి",
        mission: "లక్ష్యం",
        aboutDescription: "మా పౌర సమస్య నివేదన మరియు పరిష్కార వ్యవస్థ స్వచ్ఛ మరియు పచ్చ సాంకేతికత అనే థీమ్ కింద రూపొందించబడింది. ఇది పౌరులు ఆన్‌లైన్‌లో సమస్యలను నివేదించడం ద్వారా వారి నగరాన్ని మెరుగుపరచడంలో చురుకుగా పాల్గొనడానికి అనుమతిస్తుంది. మునిసిపల్ అధికారులు వాటిని సమీక్షించి, చర్య తీసుకుని, సమర్థవంతంగా పరిష్కరించగలరు, జవాబుదారీతనం మరియు నమ్మకాన్ని నిర్ధారిస్తారు.",
        howIt: "ఇది ఎలా",
        works: "పనిచేస్తుంది",
        howItWorksDescription: "మా క్రమబద్ధమైన ప్రక్రియ మీ పౌర సమస్యలను నివేదిక నుండి పరిష్కారం వరకు సమర్థవంతంగా నిర్వహించడాన్ని నిర్ధారిస్తుంది.",
        powerful: "శక్తివంతమైన",
        features: "లక్షణాలు",
        featuresDescription: "పౌర సమస్యలను సమర్థవంతంగా మరియు పారదర్శకంగా నివేదించడానికి, ట్రాక్ చేయడానికి మరియు పరిష్కరించడానికి మీకు అవసరమైనవన్నీ.",
        
        // Value Cards
        cleanGreen: "స్వచ్ఛ మరియు పచ్చ",
        cleanGreenDesc: "సాంకేతికత-ఆధారిత పౌర పరిష్కారాల ద్వారా పర్యావరణ స్థిరత్వాన్ని ప్రోత్సహించడం.",
        trustTransparency: "నమ్మకం మరియు పారదర్శకత",
        trustTransparencyDesc: "పూర్తి పారదర్శకతతో పౌరులు మరియు అధికారుల మధ్య జవాబుదారీతనాన్ని నిర్మించడం.",
        communityDriven: "సమాజ నడిచే",
        communityDrivenDesc: "పౌరులను వారి నగరాన్ని మెరుగుపరచడంలో చురుకుగా పాల్గొనేలా శక్తివంతం చేయడం.",
        efficientResolution: "సమర్థవంతమైన పరిష్కారం",
        efficientResolutionDesc: "క్రమబద్ధమైన ప్రక్రియలు సమస్యలు త్వరగా మరియు సమర్థవంతంగా పరిష్కరించబడేలా నిర్ధారిస్తాయి.",
        
        // Step Cards
        reportAnIssueStep: "సమస్య నివేదించండి",
        reportAnIssueStepDesc: "మా సరళమైన ఫారమ్ ద్వారా వివరణ, ఫోటో మరియు స్థానంతో వివరాలను సమర్పించండి.",
        storedInSystem: "సిస్టమ్లో నిల్వ చేయబడింది",
        storedInSystemDesc: "ట్రాకింగ్ మరియు నిర్వహణ కోసం సమస్య కేంద్రీకృత డేటాబేస్లో రికార్డ్ చేయబడుతుంది.",
        authoritiesTakeAction: "అధికారులు చర్య తీసుకుంటారు",
        authoritiesTakeActionDesc: "సంబంధిత విభాగానికి స్వయంచాలకంగా తెలియజేయబడుతుంది మరియు సమస్య కేటాయించబడుతుంది.",
        trackResolve: "ట్రాక్ మరియు పరిష్కరించండి",
        trackResolveDesc: "సమస్య పూర్తిగా పరిష్కరించబడే వరకు పౌరుడు నిజ-సమయ అప్డేట్లను అందుకుంటారు.",
        
        // Feature Cards
        simpleReportingForm: "సరళమైన రిపోర్టింగ్ ఫారమ్",
        simpleReportingFormDesc: "కేవలం కొన్ని క్లిక్లలో ఏదైనా పౌర సమస్యను నివేదించడానికి త్వరిత మరియు సహజమైన ఫారమ్.",
        locationPhotoSubmissions: "స్థానం మరియు ఫోటో సమర్పణలు",
        locationPhotoSubmissionsDesc: "ఖచ్చితమైన సమస్య గుర్తింపు మరియు ట్రాకింగ్ కోసం ఖచ్చితమైన స్థానం మరియు ఫోటోలను జోడించండి.",
        realTimeStatusTracking: "నిజ-సమయ స్థితి ట్రాకింగ్",
        realTimeStatusTrackingDesc: "లైవ్ అప్డేట్లతో మీ రిపోర్ట్ స్థితిని పెండింగ్ నుండి పరిష్కరించబడిన వరకు పర్యవేక్షించండి.",
        adminDashboardFeature: "అడ్మిన్ డ్యాష్బోర్డ్",
        adminDashboardFeatureDesc: "అధికారులు సమస్యలను సమర్థవంతంగా నిర్వహించడానికి మరియు పరిష్కరించడానికి సమగ్ర డ్యాష్బోర్డ్.",
        smartNotifications: "స్మార్ట్ నోటిఫికేషన్లు",
        smartNotificationsDesc: "మీ నివేదించిన సమస్య స్థితి మారినప్పుడు తక్షణ నోటిఫికేషన్లను పొందండి.",
        beforeAfterProof: "ముందు మరియు తర్వాత రుజువు",
        beforeAfterProofDesc: "పారదర్శకతతో సమస్య పరిష్కారాన్ని చూపించే దృశ్య డాక్యుమెంటేషన్.",
        quickResponseTime: "త్వరిత ప్రతిస్పందన సమయం",
        quickResponseTimeDesc: "స్వయంచాలక రూటింగ్ సమస్యలు వెంటనే సరైన విభాగానికి చేరేలా నిర్ధారిస్తుంది.",
        secureReliable: "సురక్షిత మరియు నమ్మదగిన",
        secureReliableDesc: "మీ డేటా ఎంటర్‌ప్రైజ్-గ్రేడ్ భద్రత మరియు గోప్యత చర్యలతో రక్షించబడుతుంది.",
        
        // Footer
        footerDescription: "పారదర్శక పౌర సమస్య నివేదన మరియు పరిష్కారం ద్వారా స్వచ్ఛమైన, పచ్చని నగరాలను నిర్మించడం. కలిసి మేము మా సమాజాలను మెరుగుపరుస్తాము.",
        quickLinks: "త్వరిత లింకులు",
        resources: "వనరులు",
        contactInfo: "సంప్రదింపు సమాచారం",
        copyright: "© 2025 పౌర సమస్య నివేదన వ్యవస్థ. అన్ని హక్కులు రక్షించబడ్డాయి.",
        tagline: "స్వచ్ఛమైన, పచ్చని నగరాల కోసం ❤️ తో నిర్మించబడింది"
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        localStorage.setItem('selectedLanguage', 'en');
        this.languageNames = {
            en: { short: 'EN', full: 'English', flag: '🇺🇸' },
            hi: { short: 'हि', full: 'हिंदी', flag: '🇮🇳' },
            te: { short: 'తె', full: 'తెలుగు', flag: '🇮🇳' }
        };
        this.init();
    }
    
    init() {
        this.setupLanguageSwitchers();
        this.translatePage();
        this.updateLanguageDisplay();
    }
    
    setupLanguageSwitchers() {
        // Setup desktop language switcher
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (languageBtn && languageDropdown) {
            // Toggle dropdown
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                languageDropdown.classList.remove('show');
            });
            
            // Handle language selection
            const languageOptions = languageDropdown.querySelectorAll('.language-option');
            languageOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.getAttribute('data-lang');
                    this.changeLanguage(lang);
                    languageDropdown.classList.remove('show');
                });
            });
        }
        
        // Setup mobile language switcher
        const mobileLanguageOptions = document.querySelectorAll('.mobile-lang-option');
        mobileLanguageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
    }
    
    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        this.translatePage();
        this.updateLanguageDisplay();
        
        // Update document direction for RTL languages if needed
        document.documentElement.setAttribute('lang', lang);
    }
    
    updateLanguageDisplay() {
        // Update desktop switcher
        const currentLangSpan = document.getElementById('currentLang');
        if (currentLangSpan) {
            currentLangSpan.textContent = this.languageNames[this.currentLanguage].short;
        }
        
        // Update active states
        document.querySelectorAll('.language-option, .mobile-lang-option').forEach(option => {
            const lang = option.getAttribute('data-lang');
            if (lang === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
    
    getTranslation(key) {
        return translations[this.currentLanguage]?.[key] || translations.en[key] || key;
    }
    
    t(key) {
        return this.getTranslation(key);
    }
}

// Initialize language manager
let languageManager;
document.addEventListener('DOMContentLoaded', function() {
    languageManager = new LanguageManager();
});

// Global translation function
function t(key) {
    return languageManager ? languageManager.t(key) : key;
}