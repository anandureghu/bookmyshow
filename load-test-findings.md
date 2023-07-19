# Load Test Findings

## 10 users metrics for 30 sec
```
http.codes.200: ............ 134
http.codes.201: ............ 166
http.downloaded_bytes: ..... 91556198
http.request_rate: ......... 5/sec
http.requests: ............. 300
http.response_time:
  min: ..................... 3
  max: ..................... 281
  median: .................. 74.4
  p95: ..................... 175.9
  p99: ..................... 232.8
```

## 50 users metrics for 30 sec
```
errors.ETIMEDOUT: .......... 1059  
http.codes.200: ............ 207  
http.codes.201: ............ 234  
http.downloaded_bytes: ..... 123261628  
http.request_rate: ......... 40/sec  
http.requests: ............. 1500  
http.response_time:
  min: ..................... 53  
  max: ..................... 9932  
  median: .................. 4492.8  
  p95: ..................... 9230.4  
  p99: ..................... 9801.2  
  ```
> coudn't test any more load than 50 users, the application just crashed
  ---

## Improvment Notes
- Need to be scaled horizontally
- Need to seperate read and write replicas for database or Implement Sharding
-  Implement Loadbalancing
-  Implement Caching
-  Connection pooling can also done
