import axios from "axios";
export const SinkingYahts = async (link) => {
    if (!link || link === "") {
        throw "Link not provided! || SinkingYahts.ts";
    }
    const checkSinkingYahts = await axios.get(`https://phish.sinking.yachts/v2/check/${link}`, {
        headers: {
            accept: "application/json",
            "X-Identity": "phish-scanner (NPM package)",
        },
    });
    if (checkSinkingYahts.data) {
        return true;
    }
    else {
        return false;
    }
};
