import { httpServer } from "./http";

import "./app";

const onListened = () => {
  console.log(`Server running on http://localhost:${15152}/`);
}

httpServer.listen(15152, onListened);