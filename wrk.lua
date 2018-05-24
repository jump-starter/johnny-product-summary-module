-- print start time
init = function()   
  print(os.date("%m/%d/%Y %I:%M:%S %p"))
end

-- init random
math.randomseed(os.time())
-- the request function that will run at each request
request = function() 
   
  -- define the path that will be searched, picking a random project_id with:
    -- 80% probability of being between 9M and 10M
    -- 20% probability of being between 1M - 9M
   url_path = "/api/" .. (math.random() < 0.8 and 9e6 + math.floor(1e6 * (math.random())) or 1 + math.floor(9e6 * (math.random())))

  -- Return the request object with the current URL path
   return wrk.format("GET", url_path)
end

-- print finish time
done = function()   
  print(os.date("%m/%d/%Y %I:%M:%S %p"))
end