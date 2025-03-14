export const calcularValor = (valor, percentual) => {
    const aumento = valor * (percentual / 100);
    const novoValor = valor + aumento;
    return { aumento, novoValor };
  };
  