import { httpServer } from "./http";

import "./app";

const onListened = () => {
  console.log(`Server running on http://localhost:15150/`);
}

httpServer.listen(15150, onListened);