class API {
  async getData() {
    const response = await fetch(
      `https://graph.facebook.com/v12.0/me?fields=id%2Cname%2Cfeed.limit(5)%7Bcreated_time%2Cfull_picture%2Cdynamic_posts%2Cdescription%2Cpermalink_url%7D&access_token=EAAJbhPecCokBAMauyMtu0x7XHvVNInPHq1SOfaRXz1x0gfro7vFZA9PlZARDNFZCOmsXNKzRff9DnfyGJxXVH41LQVbFnWqVg7JaA3fcxIdnERvdnOVOrX905X2TaWaJrMZAs0OMMjLFHxnPiKUAXINz5myYhKJr5koo3Oycga9lfALZCaVjxUwxR7OffwYywVgcznnHT1FQETVamu4u9`
    );
    const data = await response.json();
    return data.feed;
    // .then((response) => response.json())
    //   .then((data) => data)
  }
}
const api = new API();

export default api;

/* curl "https://api.twitter.com/2/tweets/search/recent?query=from%3ACinemaxLA%20has%3Aimages&start_time=2022-01-04T00:00:00.000Z&expansions=attachments.media_keys&tweet.fields=created_at,attachments&media.fields=media_key,duration_ms,height,preview_image_url,type,url,width,alt_text" -H "Authorization: Bearer $BEARER_TOKEN" */
