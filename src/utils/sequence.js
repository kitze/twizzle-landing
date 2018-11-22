const sequence = b => b.every((a, i) => !(a.call ? a() : setTimeout(() => sequence(b.slice(++i)), a)));
export default sequence;
