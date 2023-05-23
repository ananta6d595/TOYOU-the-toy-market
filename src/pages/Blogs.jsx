import React from "react";

const Blog = () => {

    useTitle('Blog');
    return (
        <div>
            <div className=" h-[150px] mb-32 bg-emerald-50">
                <div className="mx-auto h-[150px] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14">
                    <h1 className="font-bold text-5xl flex justify-center py-8">
                        Blog
                    </h1>
                </div>
            </div>
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 mb-16">
                <div className="bg-white">
                    <div>
                        {/* <!-- Q-1 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                1.What is an access token and refresh token? How
                                do they work and where should we store them on
                                the client-side?
                            </span>
                            <p className="text-gray-600">
                                <span className="font-bold">Access Token </span>
                                A secure string that a client uses to access
                                protected resources. An instance issues access
                                tokens to clients that have a valid
                                authorization grant. Each access token has a
                                specific scope, lifespan, and other attributes.
                                By default, an instance issues access tokens
                                with a 30-minute lifespan in the scenario where
                                the instance is the OAuth provider. For
                                third-party tokens, 30 days.
                                <br />
                                <span className="font-bold">
                                    Refresh Token{" "}
                                </span>
                                A credential that a client uses to obtain new
                                access tokens without requiring additional user
                                authorization. An instance issues a refresh
                                token to a client when it is first authorized to
                                have an access token. By default, an instance
                                issues refresh tokens with a 100-day lifespan in
                                the scenario where the instance is the OAuth
                                provider. For third-party tokens, 365 days.
                                <br />
                                Refresh tokens are the credentials that can be
                                used to acquire new access tokens. The lifetime
                                of a refresh token is much longer compared to
                                the lifetime of an access token. Refresh tokens
                                can also expire but are quiet long-lived. When
                                current access tokens expire or become invalid,
                                the authorization server provides refresh tokens
                                to the client to obtain new access token. An
                                access token is a string that identifies a user,
                                an application, or a page. The token includes
                                information such as when the token will expire
                                and which app created that token. First, it is
                                necessary to acquire OAuth 2.0 client
                                credentials from API console. Then, the access
                                token is requested from the authorization server
                                by the client. It gets an access token from the
                                response and sends the token to the API that you
                                wish to access.
                                <br />
                                you can store Access Token / Refresh Token in a
                                cookie with HTTPS-Enable = TRUE, so client
                                cannot manipulate it. Then you write an
                                OwinMiddleware that read the cookie and add
                                access token in the request. I used this
                                approach because LocalStorage or SessionStorage
                                are vulnerable to XSS attack. On the other hand
                                cookie is not mobile friendly..so if the client
                                is mobile I do not see any harm to store tokens
                                on mobile itself.
                            </p>
                        </div>
                        {/* <!-- Q-2 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                2. What are the differences between SQL and
                                NoSQL?
                            </span>
                            <p className="text-gray-600">
                                Ans: When deciding whether or not to use an SQL
                                and NoSQL database, you’ll want to understand
                                some of the following key differences before
                                deciding. Data Structure/Models Remember that a
                                key difference between SQL and NoSQL databases
                                is how the data is structured. SQL databases are
                                table-based, while NoSQL databases are
                                non-relational. This means that a SQL database
                                contains structured data and can perform an
                                analysis using a relational model. A NoSQL
                                database contains unstructured data, which means
                                it cannot be analyzed through predefined models.
                                SQL SQL or relational models work better with
                                structured data. This is because structured data
                                is easy to search and analyze, much like data
                                that is laid out in a table with columns and
                                rows. NoSQL NoSQL models make sense for less
                                structured data sets because it doesn’t rely on
                                a predefined model to analyze the data. Scaling
                                Consider scaling your database when you begin to
                                see a large increase in the amount of data
                                stored. You can either scale horizontally by
                                adding additional servers to your database or
                                vertically by increasing the storage size of
                                your existing servers. However, how you scale
                                will be dependent on whether you’re using an SQL
                                or NoSQL database. SQL Most SQL databases are
                                vertically scalable, meaning that you add more
                                RAM or CPU to your existing single server to
                                increase storage space. NoSQL NoSQL databases
                                are horizontally scalable, meaning that you
                                simply add more servers to your database to get
                                more storage space. Because of the ability to
                                add additional servers, NoSQL databases offer a
                                much more distributed database. A popular way to
                                horizontally scale your database is known as
                                sharding. Sharding refers to the concept of
                                splitting up your database into multiple
                                components to sit on multiple servers. Query
                                Data When it comes to querying your data, SQL
                                databases tend to be able to execute more
                                complex queries than NoSQL databases, but
                                whichever data set you’re using, how you run
                                queries depends on the database in question. SQL
                                SQL systems are straightforward when it comes to
                                data queries because they rely on one language.
                                Because it’s been around for a long time, a lot
                                has also gone unchanged, making the language
                                easier to pick up for team members who might be
                                less tech-savvy. NoSQL NoSQL systems are a bit
                                more complex when it comes to running queries.
                                Because there is no set query language, your
                                team will likely need to work with a developer
                                or someone a bit more knowledgeable in
                                information technology to pull data queries.
                                Data Storage In regards to data storage, SQL is
                                more straightforward, while NoSQL offers more
                                complex data storage solutions. SQL The SQL
                                storage model is a table with fixed rows and
                                columns, which programmers refer to as a
                                relational database. NoSQL There are multiple
                                storage models for NoSQL databases, including
                                key-value model, column storage, document
                                database, and graph database. Performance For
                                performance, programmers developed NoSQL
                                databases to solve some of the performance
                                issues facing SQL databases--particularly when
                                it comes to scalability. SQL If you run into
                                performance issues with your SQL database,
                                you’ll likely need a larger server to
                                accommodate the increasing amount of data. But,
                                a larger server isn’t always the most
                                cost-effective way to manage your data. NoSQL
                                Instead of purchasing larger servers with more
                                memory, NoSQL databases can scale horizontally,
                                meaning you can add new servers to what you
                                already have as needed. Popularity & Ease of use
                                Finally, this largely depends on the type of
                                data you will be dealing with when it comes to
                                popularity and ease of use. SQL SQL databases
                                tend to be best for complex queries. NoSQL NoSQL
                                databases tend to be the best option for when
                                you’re using unstructured data.
                            </p>
                        </div>
                        {/* <!-- Q-3 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                3. What is express js? What is Nest JS?
                            </span>
                            <p className="text-gray-600">
                                Ans:
                                <span className="font-bold">Express</span>
                                is a Node.js web application framework that
                                provides a wide range of functionality for
                                constructing web and mobile applications. It is
                                a layer built on top of Node that aids in the
                                management of servers and routes. You can use
                                Express with Node to create single-page,
                                multi-page, or hybrid web applications. It
                                supports the MVC architectural pattern for
                                designing web applications: Model, View, and
                                Controller.
                                <br />
                                <span className="font-bold"> NestJS</span>
                                is a Node.js framework for building server-side
                                applications. It is based on TypeScript and
                                JavaScript. This framework is inspired by
                                Angular, so most of what you find in Angular can
                                also be found in Nest, including providers,
                                middleware, components, and services. It is safe
                                to say that Nest can be easily learned by
                                Angular developers for any type of project. Nest
                                makes use the Express HTTP framework by default.
                                However, Nest is platform agnostic, meaning it
                                can work with any Node HTTP framework. For
                                example, it can optionally be configured to use
                                Fastify, which can improve the Node framework.
                                One of the cool things about NestJS is that
                                anything supported in Express (i.e., Express
                                functions) is also supported in Nest.
                                <br />
                                Node.js is a JavaScript runtime built on
                                Chrome's V8 JavaScript engine. It allows
                                developers to run JavaScript on the server side.
                                Express.js, on the other hand, is a web
                                framework for Node.js. It is designed to make
                                building web applications on top of Node.js
                                easier and more efficient. Node.js is used to
                                execute JavaScript code on the server side, it
                                allows to build fast and scalable server-side
                                applications, and provide a great platform for
                                real-time applications. Express.js is a popular
                                framework for building web applications on top
                                of Node.js, it is minimal and flexible, and
                                provides a lot of features like routing,
                                middlewares and more. So in short, Node.js is
                                the platform, and Express.js is a framework
                                built on top of it to simplify the process of
                                building web applications.
                            </p>
                        </div>
                        {/* <!-- Q-4 --> */}
                        <div className="mb-7">
                            <span className="font-bold text-black">
                                4. What is a custom hook, and why will you
                                create a custom hook??
                            </span>
                            <p className="text-gray-600">
                                Ans: Aggregation is a way of processing a large
                                number of documents in a collection by means of
                                passing them through different stages. The
                                stages make up what is known as a pipeline. The
                                stages in a pipeline can filter, sort, group,
                                reshape and modify documents that pass through
                                the pipeline. One of the most common use cases
                                of Aggregation is to calculate aggregate values
                                for groups of documents. This is similar to the
                                basic aggregation available in SQL with the
                                GROUP BY clause and COUNT, SUM and AVG
                                functions. MongoDB Aggregation goes further
                                though and can also perform relational-like
                                joins, reshape documents, create new and update
                                existing collections, and so on. While there are
                                other methods of obtaining aggregate data in
                                MongoDB, the aggregation framework is the
                                recommended approach for most work. There are
                                what are called single purpose methods like
                                estimatedDocumentCount(), count(), and
                                distinct() which are appended to a find() query
                                making them quick to use but limited in scope.
                                The map-reduce framework on MongoDB is a
                                predecessor of the aggregation framework and
                                much more complex to use. MongoDB have
                                deprecated.
                                <br />
                                When you need to do more complex aggregation,
                                you can use the MongoDB aggregation pipeline
                                (here’s a more detailed tutorial). Aggregation
                                pipelines are collections of stages that,
                                combined with the MongoDB query syntax, will
                                allow you to obtain an aggregated result. Before
                                we dive into the code, let's understand what the
                                aggregation pipeline itself does and how it
                                works. In the aggregation pipeline, you list out
                                a series of instructions in a "stage." For each
                                stage that's defined, MongoDB executes them one
                                after another in order to give a finalized
                                output you're able to use. Let's look at an
                                example usage of the aggregate command: In this
                                example, we run a stage called $match. Once that
                                stage is run, it passes its output to the $group
                                stage. $match allows us to take a collection of
                                items and only receive the items with the status
                                values of A. Afterwards, we use $group in order
                                to group documents based on the cust_id field.
                                As part of the $group stage, we calculate the
                                sum of all of each group's amount fields. In
                                addition to $sum, MongoDB provides a myriad of
                                other operators you can use in your
                                aggregations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
