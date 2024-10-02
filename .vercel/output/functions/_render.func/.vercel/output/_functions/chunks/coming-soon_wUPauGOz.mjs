const comingSoon = new Proxy({"src":"/_astro/coming-soon.C8u-V5zm.png","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nick/Developer/portfolio-resume/src/assets/coming-soon.png";
							}
							
							return target[name];
						}
					});

export { comingSoon as default };
