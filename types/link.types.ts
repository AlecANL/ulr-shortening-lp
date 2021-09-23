export interface IShortLink {
  ok: boolean;
  result: IResult;
}

export interface IResult {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  short_link3: string;
  full_short_link3: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}