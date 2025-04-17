here is working mechanism of email scheduling  backend made using 
BULLMQ ,EXPRESS,NODEMAILER 

BULLMQ  -->BullMQ uses Redis as a backend for job queues, uses TCP protcols which persistent and fast  underhood to communicate with redis inmemory data store to form  a sorted set data structure it has a email queue where event are stored in sorted format according to time and worker queue process email queue to send email on time 

NODEMAILER --> nodemailer uses SMTP protcol for email sending service 

POSTMAN -->for REST API TESTING 

DATABASE --> FOR data storage  i uses json file for storage of email data 

producer_queue-->add job to redis queue then worker process it 


WORKERQUEUE-->When time comes, Redis notifies the Worker.  worker queue process email queue for sending email atleast 3 attempt in this case  
Worker executes the job, and updates status:

completed, failed, retrying




DOCKER --> which is hosting our redis inmemory cache  in this project 

ioredis --> ioredis is a powerful Node.js client for Redis. It lets our Node.js app connect to Redis, read/write data, and use advanced features like pub/sub


sortedset -->  it is type of data structure in redis where unique element are sorted in order either time or either 



Component    	Tech 
----------------------------
API Framework	Express.js
Queue System	BullMQ
Queue Backend	Redis
Email Simulation	Nodemailer
Storage	JSON File






        
