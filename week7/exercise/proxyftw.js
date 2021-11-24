let providerHandler = {
  get: async(obj, prop) => {
      console.log('load something from remote...')
      return new Promise( (res, rej) => {
          setTimeout(() => res(42), 4200)
      })
  },
  set: async (obj, prop, value) => {
      return new Promise((res, rej) => {
          console.log('save something remotely...')
          setTimeout(() => res(true), 1000)
      })
  }
}

let receiverHandler = {
  get: async (target, name) => {
      if (target.prop instanceof Promise) {
          return target.prop.then(res => target[name] = res)
      } else {
          return target[name]
      }
  },
  set: function (obj, prop, value) {
      obj[prop] = value
  }
}

async function main() { 
  let dynrecv = new Proxy({}, receiverHandler) // reading proxy
  let dynprov = new Proxy({}, providerHandler) // setting proxy 
  
  dynrecv.prop = await dynprov.prop   // await it here
  console.log(await dynrecv.prop)

  dynrecv.another = dynprov.another   // direct assign here, no await
  console.log(await dynrecv.another)
     
  await dynprov.setme("value")        // store something remotely.
                                      // it's up to u to decide await or not
}

main()