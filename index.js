// describe('shout(string)', function() {
//     it('receives one argument and returns it in all caps', function() {
//       expect(shout('hello')).toEqual('HELLO');
//     })
//   })

const { spyOn } = require("expect")

function shout(string) {
    return string.toUpperCase()
}
shout("hello")


// describe('whisper(string)', function() {
//     it('receives one argument and returns it in all lowercase', function() {
//       expect(whisper('HELLO')).toEqual('hello');
//     })
//   })

function whisper(string) {
    return string.toLowerCase()
}
whisper("hello")


// describe('logShout(string)', function() {
//     it('takes a string argument and logs it in all caps using console.log()', function() {
//       const spy = expect.spyOn(console, 'log').andCallThrough();
  
//       logShout('hello');
  
//       expect(spy).toHaveBeenCalledWith('HELLO');
  
//       console.log.restore();
//     })
//   })
 

function logShout (aWord) {
    console.log(aWord.toUpperCase( ));
  }
  longShout(hello)


//   describe('logWhisper(string)', function() {
//     it('takes a string argument and logs it in all lowercase using console.log()', function() {
//       const spy = expect.spyOn(console, 'log').andCallThrough();
  
//       logWhisper('HELLO');
  
//       expect(spy).toHaveBeenCalledWith('hello');
  
//       console.log.restore();
//     })
//   })


function logWhisper (aWord) {
    console.log(aWord.toLowerCase( ));
  }
logWhisper(hello)


// describe('sayHiToHeadphonedRoommate(string)', function() {
//     it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//       expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
//     })
  
//     it('returns "YES INDEED!" if `string` is uppercase', function() {
//       expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
//     })
  
//     it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
//       expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
//         "I would love to!"
//       );
//     });
//   })

function sayHiToHeadphonedRoommate (aWord) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (aWord.toLowerCase(aWord) === aWord) {
      return cantUnswer;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === aWord) {
      return lovUnswer
    }
  }