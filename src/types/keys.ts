// create a type of keys, that has several properties, and each property is a string. This is used to store the API keys. Make not all values required, as some APIs do not require an API key.
export type keys = {
    googleSafeBrowsing?: string;
    phisherman?: string;
    urlScan?: string;
    virusTotal?: string;
    ipQualityScore?: string;
    checkPhish?: string;
}