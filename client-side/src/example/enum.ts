const getIndex = () => 3
enum Status {
  Uploading,
  Success = 2,
  Failed = getIndex(),
}

console.log(Status)

enum Animals {
  Dog,
  Cat,
}

interface Dog {
  type: Animals.Dog
}

const dog: Dog = {
  type: Animals.Dog,
}

enum Status {
  Off = 0,
  On,
}

interface Light {
  status: Status
}

const stat = {
  status: Status.Off,
}
