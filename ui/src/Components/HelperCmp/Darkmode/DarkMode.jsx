// darkModeUtils.js
const DarkMode = (isDarkMode, setIsDarkMode) => {
    setIsDarkMode(prevMode => {
        const newMode = !prevMode;

        // Define colors
        const white = 'var(--whiteBg)';
        const black = 'var(--mainBgcolorDark)';
        const midBlack = 'var(--MyDarkGrayBg)';
        const lightBlack = 'var(--lightGrayColor)';
        const lightwhite = 'var(--lightWhite)';
        const navRed = 'var(--topNavBgColor)'
        const darkBlue = 'var(--cardHeadColorDark)'
        const darkBlue2 = 'var(--d-blue)'

        // Apply styles based on dark mode
        const root = document.getElementById("root");
        const navbg = document.getElementById("ToperNav");
        const homeA = document.getElementById("homeA");
        const homeB = document.getElementById("homeB");
        const team = document.getElementById("team");
        const timeTable = document.getElementById("timeTable");
        const noticeBg = document.getElementById("noticeBg");
        const TestimonialParent = document.getElementById("TestimonialParent");
        const liveCards = document.getElementById("liveCards");
        const liveA = document.getElementById("liveA");
        const liveB = document.getElementById("liveB");
        const liveC = document.getElementById("liveC");
        const liveD = document.getElementById("liveD");
        const TestimonialChild = document.getElementById("TestimonialChild");
        const HomeOffer = document.getElementById("HomeOffer");
        const signUpNow = document.getElementById("signUpNow");
        const aboutBg = document.getElementById("aboutBg");
        const MissionLeft1 = document.getElementById("MissionLeft1");
        const MissionLeft2 = document.getElementById("MissionLeft2");
        const MissionRight = document.getElementById("MissionRight");
        const Accordion1 = document.getElementById("Accordion1");
        const MyCardBg = document.getElementById("MyCardBg");
        const counter1 = document.getElementById("counter1");
        const counter2 = document.getElementById("counter2");
        const counter3 = document.getElementById("counter3");
        const counter4 = document.getElementById("counter4");
        const CourseListNav = document.getElementById("CourseListNav");
        const studentZoneNav = document.getElementById("studentZoneNav");
        const branchBgA = document.getElementById("branchBgCard");
        const branchBgB = document.getElementById("branchChild");
        const branchBgC = document.getElementById("shortContact");
        const shortContactA = document.getElementById("shortContactA");
        const MobileNav = document.getElementById("MobileNav");
        const mainCourseEle = document.getElementById("mainCourseEle");
        const CourseEleChild = document.getElementById("CourseEleChild");
        const cerEle = document.getElementById("cerEle");
        const MyFooterColor = document.getElementById("MyFooterColor");
        const thumblain = document.getElementById("thumblain");
        const BAddress = document.getElementById("BAddress");
        const dText = document.getElementById("dText");
        const absirfdiitBg = document.getElementById("absirfdiitBg");

        if (root) {
            root.style.background = newMode ? black : lightwhite;
        } if (navbg) {
            navbg.style.background = newMode ? black : navRed;
        }
        if (MobileNav) {
            MobileNav.style.background = newMode ? black : navRed;
        }
        if (homeA) {
            homeA.style.background = newMode ? midBlack : white;
            homeA.style.color = newMode ? white : midBlack;

        } if (homeB) {
            homeB.style.background = newMode ? midBlack : white;
            homeB.style.color = newMode ? white : midBlack;
        }
        if (dText) {
            dText.style.color = newMode ? white : midBlack;
        }
        if (team) {
            team.style.background = newMode ? midBlack : white;
        }

        if (timeTable) {
            timeTable.style.background = newMode ? midBlack : white;
        }
        if (noticeBg) {
            noticeBg.style.background = newMode ? midBlack : white;
        }
        if (TestimonialChild) {
            TestimonialChild.style.background = newMode ? midBlack : white;
        }
        if (TestimonialParent) {
            TestimonialParent.style.background = newMode ? midBlack : white;
        }
        if (liveCards) {
            liveCards.style.background = newMode ? midBlack : white;
            liveCards.style.color = newMode ? white : midBlack;
        }

        if (liveA) {
            liveA.style.background = newMode ? lightBlack : white;
            liveA.style.color = newMode ? white : midBlack;
        }
        if (liveB) {
            liveB.style.background = newMode ? lightBlack : white;
            liveB.style.color = newMode ? white : midBlack;
        }
        if (liveC) {
            liveC.style.background = newMode ? lightBlack : white;
            liveC.style.color = newMode ? white : midBlack;
        }
        if (liveD) {
            liveD.style.background = newMode ? lightBlack : white;
            liveD.style.color = newMode ? white : midBlack;
        }
        if (HomeOffer) {
            HomeOffer.style.background = newMode ? lightBlack : white;
        }
        if (signUpNow) {
            signUpNow.style.background = newMode ? lightBlack : white;
        }
        if (CourseListNav) {
            CourseListNav.style.background = newMode ? black : navRed;
        }
        if (studentZoneNav) {
            studentZoneNav.style.background = newMode ? black : navRed;
        }

        if (aboutBg) {
            aboutBg.style.background = newMode ? lightBlack : white;
            aboutBg.style.color = newMode ? white : midBlack;

        }
        if (MissionLeft1) {
            MissionLeft1.style.background = newMode ? lightBlack : white;
            MissionLeft1.style.color = newMode ? white : midBlack;

        }
        if (MissionLeft2) {
            MissionLeft2.style.background = newMode ? lightBlack : white;
            MissionLeft2.style.color = newMode ? white : midBlack;

        }
        if (MissionRight) {
            MissionRight.style.background = newMode ? lightBlack : white;
            MissionRight.style.color = newMode ? white : midBlack;

        }
        if (MyCardBg) {
            MyCardBg.style.background = newMode ? lightBlack : white;
            MyCardBg.style.color = newMode ? white : midBlack;

        }
        if (Accordion1) {
            Accordion1.style.background = newMode ? lightBlack : white;
            Accordion1.style.color = newMode ? white : midBlack;

        }
        if (counter1) {
            counter1.style.background = newMode ? lightBlack : white;
            counter1.style.color = newMode ? white : midBlack;
        }

        if (counter2) {
            counter2.style.background = newMode ? lightBlack : white;
            counter2.style.color = newMode ? white : midBlack;
        }

        if (counter3) {
            counter3.style.background = newMode ? lightBlack : white;
            counter3.style.color = newMode ? white : midBlack;
        }

        if (counter4) {
            counter4.style.background = newMode ? lightBlack : white;
            counter4.style.color = newMode ? white : midBlack;
        }
        if (mainCourseEle) {
            mainCourseEle.style.background = newMode ? lightBlack : white;
            mainCourseEle.style.color = newMode ? white : midBlack;
        }

        if (CourseEleChild) {
            CourseEleChild.style.background = newMode ? lightBlack : white;
            CourseEleChild.style.color = newMode ? white : midBlack;
        }
        if (cerEle) {
            cerEle.style.background = newMode ? lightBlack : white;
            cerEle.style.color = newMode ? white : midBlack;
        } if (MyFooterColor) {
            MyFooterColor.style.background = newMode ? lightBlack : darkBlue;
            MyFooterColor.style.color = newMode ? white : midBlack;
        }
        if (thumblain) {
            thumblain.style.background = newMode ? lightBlack : darkBlue;
            thumblain.style.color = newMode ? white : midBlack;
        } if (BAddress) {
            BAddress.style.background = newMode ? lightBlack : darkBlue2;
            BAddress.style.color = newMode ? white : midBlack;
        }

        if (branchBgA) {
            branchBgA.style.background = newMode ? midBlack : darkBlue;
        }
        if (branchBgB) {
            branchBgB.style.background = newMode ? midBlack : darkBlue;
        }

        if (branchBgC) {
            branchBgC.style.background = newMode ? midBlack : darkBlue;
        }
        if (shortContactA) {
            shortContactA.style.background = newMode ? midBlack : darkBlue;
        } if (absirfdiitBg) {
            absirfdiitBg.style.background = newMode ? midBlack : navRed;
        }

        return newMode;
    });
};

export default DarkMode;
