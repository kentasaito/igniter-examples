import { default as _api } from "./application/api/api.js";
import { default as _getGroup } from "./application/api/getGroup.js";
import { default as _set } from "./application/api/set.js";
import { default as _register } from "./application/api/auth/register.js";
import { default as _unregister } from "./application/api/auth/unregister.js";
import { default as _login } from "./application/api/auth/login.js";
import { default as _logout } from "./application/api/auth/logout.js";
import { default as _send } from "./application/api/send.js";
import { default as _controller } from "./application/controllers/controller.js";
import { default as _session } from "./application/controllers/session.js";

const routes = {
  "/api/api": _api,
  "/api/getGroup": _getGroup,
  "/api/set": _set,
  "/api/auth/register": _register,
  "/api/auth/unregister": _unregister,
  "/api/auth/login": _login,
  "/api/send": _send,
  "/api/auth/logout": _logout,
  "/controller": _controller,
  "/session": _session,
};
export { routes };
