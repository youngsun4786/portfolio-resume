const flojoy = new Proxy({"src":"/_astro/flojoy.G4RXWN9v.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nick/Developer/portfolio-resume/src/assets/flojoy.png";
							}
							
							return target[name];
						}
					});

export { flojoy as default };
