export default class Authorization extends Error {
  constructor() {
    super("authorization required");
  }
}