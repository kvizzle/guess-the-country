
import file from 'underscore';
var _ = file;

var data = [
  
    {
      country: "England",
      info: [
        {
          landmark: "Big Ben",
          imageUrl: require('../src/images/ben.jpg')
        },
        {
          landmark: 'Stonehenge',
          imageUrl: require('../src/images/stonehenge.jpg')
        }
      ]
    },
    {
      country: "America",
      info: [
        {  
          landmark: 'Statue of Liberty',
          imageUrl: require('../src/images/liberty.jpg')
        },
        {
          landmark: 'Empire State Building',
          imageUrl: require('../src/images/empire.jpg')
        },
        {
          landmark: 'Golden Gate Bridge',
          imageUrl: require('../src/images/goldengate.jpg')
        },
        {
          landmark: 'White House',
          imageUrl: require('../src/images/whitehouse.jpg')
        }
      ]
    },
    {
      country: "France",
      info: [
        {
          landmark:'Louvre',
          imageUrl: require('../src/images/louvre.jpg')
        },
        {
          landmark:'Eifel Tower',
          imageUrl: require('../src/images/eiffel.jpg')
        },
        {
          landmark: 'Arc De Triumph',
          imageUrl: require('../src/images/arcdetriumph.jpg')
        }  
      ]
    },
    {
      country: 'Egypt',
      info: [
        {
          landmark: 'The Pyramids',
          imageUrl: require('../src/images/pyramids.jpg')
        }
      ]
    },
    {
      country: 'Italy',
      info: [
        {
          landmark: 'Tahj Mahal',
          imageUrl: require('../src/images/tahj.jpg')
        },
        {
          landmark: 'Colloseum',
          imageUrl: require('../src/images/coloseum.jpg')
        },
         {
          landmark: 'Leaning Tower of Pizza',
          imageUrl: require('../src/images/pizza.jpg')
        }
      ]
    },
    {
      country: 'Israel',
      info: [
        {
          landmark: 'Western Wall',
          imageUrl: require('../src/images/wall.jpg')
        }
      ]
    }
  ];

   data.selectGame = function ()  {
      var answerSelection = _.shuffle (
        this.reduce(function
          (a,b)  {
              return a.concat(b.country);
          },[]
        )
      ).slice(0,4);

      var answer = answerSelection[_.random(
        answerSelection.length-1
      )];

      var answerObj =  _.find(
          this, function(val) {
            if (val.country === answer) {
              return val;
            };
          }
        )

        var landmark = answerObj.info[_.random(
        answerObj.info.length-1
      )];

      return {
        answerSelection: answerSelection,
        landmark: landmark,
        answer: answer
      };
    };
    
module.exports = {data}