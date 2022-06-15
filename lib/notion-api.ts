import { NotionAPI } from 'notion-client'
export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
  activeUser: '59f76bd8-aff8-47d6-954e-25bcf8c4ab3e',
  authToken: '8c37f453deee34e19ea83d5938661f77397c5d73c0ca8611c854f1c97fa653226421a8f92edd8c43bb3174d9e538e0dea32e1957624278e3ebd5266b1eff79bab062fda0418eb97fa55f83c2091d'
})