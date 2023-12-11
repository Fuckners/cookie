import { httpServer } from "./http";

import "./app";

const onListened = () => {
  console.log(`Server running on http://localhost:${15151}/`);
}

httpServer.listen(15151, onListened);