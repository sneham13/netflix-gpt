import OpenAI from "openai";
import open_api_key from "../utils/constants";
const openai = new OpenAI({ apiKey: open_api_key, dangerouslyAllowBrowser:true });
export default openai;
