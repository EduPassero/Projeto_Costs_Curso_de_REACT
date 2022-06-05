import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <div>
                <Input 
                    type="text" 
                    name="name" 
                    text="Nome do Projeto" 
                    placeholder="Insira o nome do projeto"
                />
            </div>
            <div>
                <Input 
                    type="number"
                    name="budget"
                    text="Orcamento do Projeto"
                    placeholder="Insira o orçamento total"
                />
            </div>
            <div>
                <Select name="category_id" text="Selecione a categoria" />
            </div>
            <div>
                <SubmitButton type="submit" text={btnText} />
            </div>
        </form>
    )
}

export default ProjectForm