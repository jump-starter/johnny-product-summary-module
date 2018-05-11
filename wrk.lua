-- print start time
init = function()   
  print(os.date("%m/%d/%Y %I:%M:%S %p"))
end

-- init random
math.randomseed(os.time())
-- the request function that will run at each request
request = function() 
   
  -- define the path that will be searched, picking a random project_id between 0 and 10000000)
   url_path = "/api/" .. (1 + math.floor(10000000*math.random()^10))

  -- Return the request object with the current URL path
   return wrk.format("GET", url_path)
end

-- print finish time
done = function()   
  print(os.date("%m/%d/%Y %I:%M:%S %p"))
end