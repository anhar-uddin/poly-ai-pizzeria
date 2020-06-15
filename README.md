## Run the programme 

To run the programme run `node main.js` then enter the first line (N and M) separating the numbers with spaces i.e `5 2` followed by 'enter' then the next line (M) i.e `3 3 2`. Continue until all M lines have been entered. Then followed by 'enter' followed by 'ctrl + D'. The output will then follow. 


## Approach to this problem

1. Visualise the city as a matrix
2. From each block move in all direction keeping a count of the moves made
3. Do the same for every new block visited 
4. Repeat until all moves have been used 
5. Keep a track of all blocks visited as object keys by turning the x and y to keys and append the location of the pizzeria that visited that block to the object as keys
6. The block key with the most number of pizzeria location keys has the best selection of pizza

Edge cases: 
- make sure not to move out of the matrix
- make sure not to visit the same block again 


## Complexity
Hard to test bigger cities
