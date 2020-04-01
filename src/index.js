export default {
    install(Vue, options) {

        Vue.mixin({
            data() {
                return {
                    errors : null,
                }
            },
            methods: {
                fillErrors(errors) {
                    if(options.type === 'array') {
                        errors = Object.entries(errors);
                        errors = errors.flatMap(error => {
                            return [...error[1]];
                        })
                    }
                    else if(options.type === 'object') {
                        errors = Object.entries(errors);
                        errors = errors.map(error => {
                            let key = error[0];
                            let value = error[1][0];
                            return {
                                [key]: value
                            };
                        })
                        .reduce((acc, current) => {
                            acc = Object.assign(acc, current);
                            return acc;
                        });
                    } 
                    this.errors = errors;
                }
            },
          })

       }
   };