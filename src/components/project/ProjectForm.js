import styles from './ProjectForm.module.css'
function ProjectForm(){
    return(
        <form className={styles.form}>
            <div>
                <input type="text" placeholder="Insira o nome do projeto"/>
            </div>
            <div>
                <input type="text" placeholder="Insira o orçamento total"/>
            </div>
            <div>
                <select name="category_id" id="">
                    <option disabled> Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
        </form>
    )
}

export default ProjectForm