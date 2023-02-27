import React, { useState } from "react";

const ChatLeadster = ({ identifier, scriptUrl }) => {
  const [neuroleadId] = useState(identifier);
  const [neuroleadScript] = useState(scriptUrl);

  return (
    <script type="text/javascript">
      {
        ((n, r, l, d) => {
          try {
            const h = r.head || r.getElementsByTagName("head")[0], s = r.createElement("script");
            s.defer = true;
            s.setAttribute("type", "text/javascript");
            s.setAttribute("src", l);
            n.neuroleadId = d;
            h.appendChild(s);
          } catch (e) { }
        })(window, document, neuroleadScript, neuroleadId)
      }
    </script>
  );
}

export default ChatLeadster;
