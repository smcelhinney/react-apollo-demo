# Try to write your query here
mutation {
  createMovie(data:{
    name:"Thor"
    year: 2011
    characters:{
      create:{
        name:"Thor"
        weapon:{
          create:{
            name:"Mjolnir"
          }
        }
      }
    }
  }){
    id
    characters {
      id
    }
  }
}
