function aboutSkillsContent() {
    class SkillLevel {
        constructor(name, level, color) {
            this.name = name;
            this.level = level;
            this.color = color;
            this.angleRotationFirst;
            this.angleRotationSecond;
        }
        get angleRotationFirst() {
            if(this.level >= 50) {
                return 180;
            } else {
                return 180/50*this.level;
            }
        }
        get angleRotationSecond() {
            if(this.level > 50) {
                return 180/50*(this.level-50);
            } else {
                return 0;
            }
        }
        insert(insertSection) {
            let displayEndLine;
            if(this.level > 50) {
                displayEndLine = "block";
            } else {
                displayEndLine = "none";
            }
            let newElem = document.createElement('div');
            newElem.classList.add('skill');
            newElem.innerHTML = 
            `<div class="skill__diagram diagram">
                <div class="diagram__conteiner" style="box-shadow: 0px 0px 20px 3px ${this.color};">
                    <div class="diagram__start-line" style="transform:rotate(${this.angleRotationFirst}deg); background: linear-gradient(to right, ${this.color} 50%, transparent 50%); z-index: 1">
                    </div>
                    <div class="diagram__end-line" style="transform:rotate(${this.angleRotationSecond}deg); background: linear-gradient(to right, transparent 50%, ${this.color} 50%); display: ${displayEndLine}; z-index: 3">
                    </div>
                    <div class="diagram__shield" style="z-index: 2">
                    </div>
                    <div class="diagram__value" style="z-index: 4">
                        <span style="text-shadow: 0px 0px 3px ${this.color};">${this.level}%</span>
                    </div>
                </div>
            </div>
            <div class="skill__name">
                <span style="text-shadow: 5px 0px 3px ${this.color};">${this.name}</span>
            </div>
            `;
            insertSection.insertAdjacentElement("beforeend", newElem);
        }
    }

    const contentBlockConteiner = document.getElementById('about-skills');

    const skills = [
        {
            name: "HTML",
            level: 85,
            color: '#E75710'
        },
        {
            name: "CSS",
            level: 80,
            color: '#4169E1'
        },
        {
            name: "JavaScript",
            level: 60,
            color: '#EFD81D'
        },
        {
            name: "ReactJS",
            level: 10,
            color: '#5CCFEE'
        }
    ];

    if (contentBlockConteiner) {
        let template = document.createElement('div');
        template.classList.add('skills-gallery');
        getAndCreateSkillsDiagrams(skills, template);

        contentBlockConteiner.prepend(template);;
    }

    function getAndCreateSkillsDiagrams(arr, insertSection) {
        if (arr.length) {
            for (let i = 0; i < arr.length; i++) {
                let item = new SkillLevel(arr[i].name, arr[i].level, arr[i].color);
                item.insert(insertSection);
            }    
        } else {
    
        }
    }
}

export { aboutSkillsContent };