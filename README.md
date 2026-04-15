# Django To-Do List

A clean and minimal to-do list web app built with Django.  
It supports creating multiple lists and managing tasks (add, edit, delete) within each list.

## Features

- Create and manage multiple to-do lists
- Add tasks with title, description, and due date
- Edit existing tasks
- Delete tasks and entire lists
- List tasks by selected to-do list
- Confirmation pages for delete actions
- Responsive and modern UI with custom CSS/JS animations

## Tech Stack

- **Backend:** Django 6 (Class-Based Generic Views)
- **Database:** PostgreSQL (configured in project settings)
- **Frontend:** Django Templates, HTML, CSS, JavaScript
- **Other:** CSRF protection, Django URL routing, static files

## Project Structure

```text
django_todo_list/
|-- manage.py
|-- requirements.txt
|-- todo_project/
|   |-- settings.py
|   |-- urls.py
|   |-- asgi.py
|   `-- wsgi.py
`-- todo_app/
    |-- models.py
    |-- views.py
    |-- urls.py
    |-- templates/
    |   |-- base.html
    |   `-- todo_app/
    |-- static/
    |   `-- todo_app/
    `-- migrations/
```

## Data Model

### `ToDoList`
- `title` (unique)

### `ToDoItem`
- `title`
- `description` (optional)
- `created_date` (auto)
- `due_date` (default: one week from creation)
- `todo_list` (ForeignKey to `ToDoList`)

## Setup Instructions

### 1) Clone the repository

```bash
git clone https://github.com/RishavLaha3/django_todo_list.git
cd django_todo_list
```

### 2) Create and activate a virtual environment

#### Windows (PowerShell)
```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

#### macOS/Linux
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3) Install dependencies

```bash
pip install -r requirements.txt
```

### 4) Configure database

Update `todo_project/settings.py` with your PostgreSQL credentials if needed.

### 5) Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6) Start the development server

```bash
python manage.py runserver
```

## Key URLs

- `/` - All to-do lists
- `/list/<list_id>/` - Items in a specific list
- `/list/add/` - Create a new list
- `/list/<pk>/delete/` - Delete a list
- `/list/<list_id>/item/add/` - Add an item
- `/list/<list_id>/item/<pk>/` - Edit an item
- `/list/<list_id>/item/<pk>/delete/` - Delete an item

## Future Improvements

- Add user authentication (login/signup)
- Mark tasks as complete/incomplete
- Add search and filter by due date
- Deploy with Docker + cloud hosting

## Author

**Rishav Laha**  
GitHub: [RishavLaha3](https://github.com/RishavLaha3)
