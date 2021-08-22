var isBuyActive = true;
var noOfLayers = 0;
var buyButton = false;
var totalPrice = 0;

var state= {
  chocolate:false,
  strawberry:false,
  vanilla:false,
  redvelvet:false,
  butterscotch:false
}


var price= {
    chocolate:300,
    strawberry:100,
    butterscotch:200,
    vanilla:250,
    redvelvet :350,
}

var layerWidth = {
  1:'245px',
  2:'200px',
  3:'160px',
  4:'120px',
  5:'80px'
}

function renderChocolate()
{
   if(noOfLayers==5)
   {
     alert("You cannot add more than 5 layers!!")
   }
   if(noOfLayers < 5 && isBuyActive)
   {
     noOfLayers++
     let newElement = document.createElement("div");
     newElement.classList.add('layer1')
     newElement.style.width = layerWidth[noOfLayers]
     document.querySelector('.layers').prepend(newElement)
     totalPrice+=price['chocolate']
     let newItem = document.createElement('div')
     newItem.classList.add('item')
     newItem.innerHTML =  'Chocolate - 300'
     document.querySelector('.totalBill').append(newItem)
   }
}

function renderStrawberry()
{
   if(noOfLayers==5)
   {
     alert("You cannot add more than 5 layers!!")
   }
   if(noOfLayers < 5 && isBuyActive)
   {
     noOfLayers++
     let newElement = document.createElement("div");
     newElement.classList.add('layer2')
     newElement.style.width=layerWidth[noOfLayers]
     newElement.style.backgroundColor = "rgb(255, 127, 170)"
     document.querySelector('.layers').prepend(newElement)
     totalPrice+=price['strawberry']
     let newItem = document.createElement('div')
     newItem.classList.add('item')
     newItem.innerHTML ='Strawberry - 100'
     document.querySelector('.totalBill').append(newItem)
   }
}

function renderButterscotch()
{
   if(noOfLayers==5)
   {
     alert("You cannot add more than 5 layers!!")
   }
   if(noOfLayers < 5 && isBuyActive)
   {
     noOfLayers++
     let newElement = document.createElement("div");
     newElement.classList.add('layer3')
     newElement.style.width=layerWidth[noOfLayers]
     document.querySelector('.layers').prepend(newElement)
     totalPrice+=price['butterscotch']
     let newItem = document.createElement('div')
     newItem.classList.add('item')
     newItem.innerHTML ='Butterscotch - 200'
     document.querySelector('.totalBill').append(newItem)
   }
}

function renderVanilla()
{
   if(noOfLayers==5)
   {
     alert("You cannot add more than 5 layers!!")
   }
   if(noOfLayers < 5 && isBuyActive)
   {
     noOfLayers++
     let newElement = document.createElement("div");
     newElement.classList.add('layer4')
     newElement.style.width=layerWidth[noOfLayers]
     document.querySelector('.layers').prepend(newElement)
     totalPrice+=price['vanilla']
     let newItem = document.createElement('div')
     newItem.classList.add('item')
     newItem.innerHTML ='Vanilla - 250'
     document.querySelector('.totalBill').append(newItem)
   }
}


function renderRedvelvet()
{
   if(noOfLayers==5)
   {
     alert("You cannot add more than 5 layers!!")
   }
   if(noOfLayers < 5 && isBuyActive)
   {
     noOfLayers++
     let newElement = document.createElement("div");
     newElement.classList.add('layer5')
     newElement.style.width=layerWidth[noOfLayers]
     document.querySelector('.layers').prepend(newElement)
     totalPrice+=price['redvelvet']
     let newItem = document.createElement('div')
     newItem.classList.add('item')
     newItem.innerHTML ='Redvelvet - 350'
     document.querySelector('.totalBill').append(newItem)
   }
}

function Buy()
{
   if(isBuyActive)
   {
     let newElement = document.createElement('div')
     newElement.classList.add('total')
     newElement.innerHTML= `Total - ${totalPrice}`
     document.querySelector('.totalBill').appendChild(newElement)
     let cakeImage = document.createElement('img')
      cakeImage.id = 'cakeImage'
      cakeImage.src='assets/candle.png'
      document.querySelector('.layers').prepend(cakeImage)
      isBuyActive=!isBuyActive
   }
}


  
/*Fill your code */
