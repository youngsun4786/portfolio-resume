const UAEM = new Proxy({"src":"/_astro/UAEM.CCj5yWea.jpeg","width":200,"height":200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nick/Developer/portfolio-resume/src/assets/UAEM.jpeg";
							}
							
							return target[name];
						}
					});

export { UAEM as default };
