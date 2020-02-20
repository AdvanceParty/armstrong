const util = require("util")
export const inspect = (
  obj,
  { showHidden = false, depth = null, colors = true } = {}
) => util.inspect(obj, showHidden, depth, colors)
