import { makeStyles } from "@mui/styles";
import { spacing } from "@mui/system";
import AuditBackImg from "../../assets/image/hyperbridge/AuditBackground.svg"
const useStyles = makeStyles((theme) => ({
    header: {
        fontFamily: "PlusjakartaSans !important",
        //     font- style: normal;
        // font - weight: 700;
        fontSize: "3rem !important",
        // line - height: 64px;
        /* or 133% */


        /* Main white */


        right: "695px",
        top: "212px",
        color: "#D0D4DE",
        fontWeight: "700",

        lineHeight: "64px",

        [theme.breakpoints.down('md')]: {

            fontSize: "2rem !important",
            fontFamily: "PlusjakartaSans !important",
            fontWeight: "700",
            background: "green"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem !important",
            fontFamily: "PlusjakartaSans !important",
            fontWeight: "700",
            // background: "red",
            width: "100vw"
        }
    },
    Subheader: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "1rem",
        lineHeight: "28px",
        /* or 175% */
        margin: "10px 0px 40px 0px",
        fontFamily: "PlusjakartaSans !important",
        /* Main white */

        color: "#D0D4DE",

        opacity: "0.7",

    },
    dollarHead: {
        fontSize: "2rem !important",
        fontFamily: "PlusjakartaSans_bold !important",
        background: "linear-gradient(92.45deg, #4770FF 15.09%, #87F2E7 83.71%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem !important",
            fontFamily: "PlusjakartaSans_bold !important",
            background: "linear-gradient(92.45deg, #4770FF 15.09%, #87F2E7 83.71%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "text-fill-color": "transparent",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "2rem !important",
            fontFamily: "PlusjakartaSans_bold !important",
            background: "linear-gradient(92.45deg, #4770FF 15.09%, #87F2E7 83.71%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "text-fill-color": "transparent",
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: "2rem !important",
            fontFamily: "PlusjakartaSans_bold !important",
            background: "linear-gradient(92.45deg, #4770FF 15.09%, #87F2E7 83.71%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "text-fill-color": "transparent",
        },
        [theme.breakpoints.down("xl")]: {
            fontSize: "2rem !important",
            fontFamily: "PlusjakartaSans_bold !important",
            background: "linear-gradient(92.45deg, #4770FF 15.09%, #87F2E7 83.71%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "text-fill-color": "transparent",
        }

    },
    Totalhead: {
        fontSize: "1rem",
        fontFamily: "PlusjakartaSans"
    },
    hyperbridgeLogo: {
        marginLeft: "70px"

    },
    ButtonWrapper: {
        display: "flex",
        alignItems: "center !important",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            alignItems: "center !important",
        },
        [theme.breakpoints.down("md")]: {
            display: "flex",
            alignItems: "center !important",
        },
        [theme.breakpoints.down("lg")]: {
            display: "flex",
            alignItems: "center !important",
        },
        [theme.breakpoints.down("xl")]: {
            display: "flex",
            alignItems: "center !important",
        }
    },
    solana: {
        marginLeft: "20px",
        textTransform: "uppercase",
        fontFamily: 'Poppins',
        fontSize: "14px",
        fontFamily: "PlusjakartaSans",
        background: "linear-gradient(92.45deg, #4770FF 15.09%, #87F2E7 83.71%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent"
    },
    numberChain: {
        color: "#fff",
        fontSize: "1rem"
    },
    dollarwrapper: {
        textAlign: "center",
    },
    LowerContainer: {
        fontFamily: "PlusjakartaSans",
        fontWeight: "700",
        fontSize: "2rem",
        lineHeight: "57px",
        px: "282px",
        /* or 178% */

        textAlign: "center",

        /* Main white */

        color: "#D0D4DE",
        [theme.breakpoints.down("sm")]: {
            fontFamily: "PlusjakartaSans",
            fontWeight: "500",
            fontSize: "1rem",

            px: "282px",
            /* or 178% */

            textAlign: "center",

            /* Main white */

            color: "#D0D4DE",
        },
        [theme.breakpoints.down("md")]: {

        },
        [theme.breakpoints.down("lg")]: {

        },
        [theme.breakpoints.down("xl")]: {

        }
    },
    RefineTitle: {
        fontFamily: "PlusjakartaSans",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "36px",
        lineHeight: "48px",
        /* or 133% */

        textAlign: "center",

        /* Main white */

        color: "#D0D4DE"
    },
    RedefineContent: {
        fontFamily: "PlusjakartaSans",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "1.2rem",
        lineHeight: "28px",
        /* or 175% */

        textAlign: "center",

        /* Main white */

        color: "#D0D4DE",

        opacity: "0.7"
    },

    SecurityWrapper: {
        fontFamily: "PlusjakartaSans",
        textAlign: "center",
        paddingTop: "132px",
        paddingBottom: "48px",
        px: "160px",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column"
        },
        [theme.breakpoints.down("md")]: {
            display: "flex",
            alignItems: "center !important",
        },
        [theme.breakpoints.down("lg")]: {
            display: "flex",
            alignItems: "center !important",
        },
        [theme.breakpoints.down("xl")]: {
            display: "flex",
            alignItems: "center !important",
        }

    },
    SecurityTitle: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "36px",
        lineHeight: "48px",
        /* or 133% */
        fontFamily: "PlusjakartaSans",
        textAlign: "center",

        /* Main white */

        color: "#D0D4DE",
        [theme.breakpoints.down("sm")]: {

        },
        [theme.breakpoints.down("md")]: {

        },
        [theme.breakpoints.down("lg")]: {

        },
        [theme.breakpoints.down("xl")]: {

        }

    },
    SecurityDescripation: {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "28px",
        /* or 175% */
        fontFamily: "PlusjakartaSans",
        textAlign: "center",

        /* Main white */

        color: "#D0D4DE",

        opacity: "0.7",
        [theme.breakpoints.down("sm")]: {

        },
        [theme.breakpoints.down("md")]: {

        },
        [theme.breakpoints.down("lg")]: {

        },
        [theme.breakpoints.down("xl")]: {

        }
    },
    LowerContainerWrapper: {
        textAlign: "center",
        padding: "150px",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            px: "281px",
            py: "158px",
            background: "red !important"

        },
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            px: "281px",
            py: "158px",
        },
        [theme.breakpoints.down("lg")]: {
            textAlign: "center",
            px: "281px",
            py: "158px",
        },
        [theme.breakpoints.down("xl")]: {
            textAlign: "center",
            px: "281px",
            py: "158px",
        }


    },
    SecondRowwrapper: {
        marginBottom: "40px"

    },
    Audit: {
        py: "40px",
        px: "50px",
        backgroundImage: `url(${AuditBackImg})`,
        height: "20vh",
        backgroundRepeat: "no-repeat"
    },
    TitleItem: {
        fontFamily: "PlusjakartaSans",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "1rem",
        background: "linear-gradient(88.49deg, #7AFBE4 48.72%, #4A54F4 84.08%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent",

        opacity: "0.9"

    },
    DescripationItem: {
        fontFamily: "PlusjakartaSans",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "1rem",
        color: "red"

    },
    WaveWrapper: {
        padding: "96px 160px 139px 104px",


    },
    Waveheader: {
        fontFamily: "PlusjakartaSans !important",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "36px",


        color: "#FFFFFF"
    },
    WaveSubheader: {
        fontFamily: "PlusjakartaSans !important",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",

        /* or 175% */


        /* Main white */

        color: "#D0D4DE",

        opacity: "0.7"
    },
    ForthRowwrapper: {
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        backgroundImage: `url("")`

    }

}));


export { useStyles };