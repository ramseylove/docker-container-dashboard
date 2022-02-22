import React from "react";

function DockerLogs() {
  return (
    <>
      <div className="logs">
        <pre>
          {`[amc] Done ヾ(＠⌒ー⌒＠)ノ
[amc] Invoking AMC script...
[amc] Run script [fn:amc] at [Sun Feb 13 17:43:38 GMT 2022]
[amc] Parameter: artwork = n
[amc] Parameter: music = y
[amc] Parameter: clean = y
[amc] Parameter: excludeList = /config/amc-exlude-list.txt
[amc] Parameter: movieFormat = {plex}
[amc] Parameter: musicFormat = {plex}
[amc] Parameter: seriesFormat = TV/{plex.tail}
[amc] Parameter: animeFormat = {plex}
[amc] Parameter: subtitles = en
[amc] Argument[0]: /watch
[amc] Use excludes: /config/amc-exlude-list.txt (109)
[amc] Ignore video extra: /watch/movies/Encino Man (1992) 720p WEBRip x264 Eng Subs [Dual Audio] [Hindi DD 2.0 - English 2.0] -=!Dr.STAR!=-/Sample Encino Man (1992) 720p WEBRip x264 Eng Subs [Dual Audio] [Hindi DD 2.0 - English 2.0] -=!Dr.STAR!=-.mkv
[amc] No files selected for processing
[amc] Done ¯_(ツ)_/¯
[amc] Done ヾ(＠⌒ー⌒＠)ノ
[amc] Invoking AMC script...
[amc] Run script [fn:amc] at [Sun Feb 13 17:43:38 GMT 2022]
[amc] Parameter: artwork = n
      `}
        </pre>
      </div>
      <div className="control">
        <button className="load-button" type="button">
          Load More
        </button>
      </div>
    </>
  );
}

export default DockerLogs;
