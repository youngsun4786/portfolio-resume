const mcgill = new Proxy({"src":"/_astro/mcgill.BAqQsTMl.jpeg","width":224,"height":224,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nick/Developer/portfolio-resume/src/assets/mcgill.jpeg";
							}
							
							return target[name];
						}
					});

export { mcgill as default };
