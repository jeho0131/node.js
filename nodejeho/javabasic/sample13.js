function func() {};
console.log(func.prototype);

func.prototype.name = 'guildong';
func.prototype.eat = function func() {console.log("eat banana");}
console.log(func.prototype);