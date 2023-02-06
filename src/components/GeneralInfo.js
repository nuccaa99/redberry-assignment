import React from "react";

const GeneralInfo = () => {
    return (
        <div>
            <header>
                <h1>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
                <p>1/3</p>
            </header>
            <form>
                <div>
                    <label>სახელი </label>
                    <input type="text" name="name" />
                    <p>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
                <div>
                    <label>გვარი </label>
                    <input type="text" name="lastname" />
                    <p>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
                <div>
                    <p>პირადი ფოტოს ატვირთვა</p>
                    <button>ატვირთვა</button>
                </div>
                <div>
                    <label>ჩემ შესახებ (არასავალდებულო) </label>
                    <input type="text" name="info" placeholder="ზოგადი ინფო შენ შესახებ" />
                </div>
                <div>
                    <label>ელ.ფოსტა</label>
                    <input type="email" name="mail" />
                    <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                </div>
                <div>
                    <label>მობილურის ნომერი</label>
                    <input type="email" name="number" />
                    <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                </div>
            </form>
        </div>
    )
}

export default GeneralInfo;