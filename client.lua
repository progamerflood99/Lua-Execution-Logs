--[[

  Hello


]]

local port = 8080
local pageName = "userName"

--[[

  With username:

  game:HttpGet("http://localhost:"..port.."/".. pageName .."="..game.Players.LocalPlayer.Name) // should work

  if it has syntax errors go fix it lazy ass
]]

game:HttpGet("http://localhost:"..port.."/"..pageName) -- simple dimple logged dat username my boy

print("yes")
