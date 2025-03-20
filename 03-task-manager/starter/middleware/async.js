// geralmente utilizamos bibliotecas para fazer esse trabalho por nós, porém, por ser a primeira vez vendo isso acontecer, vamos fazer na mão e só aí vamos poder utilizar bibliotecas, pois já teremos uma boa noção de qual é o trabalho dela e em casos de precisarmos fazer alguma alteração mais específica, vamos saber exatamente onde mexer.
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
