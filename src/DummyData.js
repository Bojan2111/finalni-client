const DummyData = {
  kuriri: [
    { id: 1, ime: "Marko petrov", rodjenje: 1987 },
    { id: 2, ime: "Andrea Marin", rodjenje: 1990 },
    { id: 3, ime: "Viktor pavlov", rodjenje: 1987 },
  ],
  paketi: [
    {
      id: 1,
      posiljalac: "Slike doo",
      primalac: "Galerija doo",
      tezina: 1.1,
      postarina: 520,
      kurirId: 3,
    },
    {
      id: 2,
      posiljalac: "Galerija doo",
      primalac: "Salon Centar",
      tezina: 0.9,
      postarina: 340,
      kurirId: 1,
    },
    {
      id: 3,
      posiljalac: "Best terarijumi",
      primalac: "Ljubimci sur",
      tezina: 5.4,
      postarina: 2200,
      kurirId: 2,
    },
    {
      id: 4,
      posiljalac: "Kul klime",
      primalac: "Izgradnja doo",
      tezina: 7.8,
      postarina: 4500,
      kurirId: 3,
    },
    {
      id: 5,
      posiljalac: "Galanterija szr",
      primalac: "Prav kroj szr",
      tezina: 2.2,
      postarina: 800,
      kurirId: 1,
    },
  ],
};

// const Data = (type) => {
//   return data;
// };

export default DummyData;
