export const car = {
    carList:[
        {name: 'Mercedes-Benz', year: 1926, location: 'Germany'},
        {name: 'BMW', year: 1916, location: 'Germany'},
        {name: 'Toyota', year: 1937, location: 'Japan'},
        {name: 'Nissan', year: 1933, location: 'Japan'},
        {name: 'Ford', year: 1903, location: 'США'},
        ],
          all:function(){
            return this.carList
          },
          getCarId:function(id) {
              for(let i = 0;i<this.carList.length;i++){
                  if(this.carList[i].name===id){
                      return this.carList[i]
                  }
              }

          }
        }
